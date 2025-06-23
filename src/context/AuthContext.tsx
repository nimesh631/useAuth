// import axios from "axios";
import { createContext, useState, useContext , ReactNode } from "react";

interface AuthContextType {
    token: string | null;
    login: (token:string) => void;
    logout: () => void;
    // refreshToken: () => Promise<string | null>;
}

 const AuthContext = createContext<AuthContextType | undefined>(undefined);

 export const AuthProvider = ({children}: {children:ReactNode}) => {
    const [token,setToken] = useState<string | null>(localStorage.getItem("token"));

    const login = (token:string)=> {
        setToken(token);
        localStorage.setItem("token",token);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    // const refreshToken = async (): Promise<string | null> => {
    //   try{
    //     const res = await axios.post("/api/users/refresh-token");
    //     const newToken = res.data.data.accessToken;
    //     if(newToken){
    //       setToken(newToken);
    //       localStorage.setItem("token",newToken);
    //       console.log("Access token refreshed");
    //       return newToken;
    //     }
    //   }catch(error){
    //     console.error("Failed to refresh token",error);
    //     logout();
    //   }
    //   return null;
    // }

    return(
        <AuthContext.Provider value={{token,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
 };

 export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be inside AuthProvider");
    return context;
 }



