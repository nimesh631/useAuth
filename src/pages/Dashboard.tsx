import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
    username: string;
    email: string
}

const Dashboard = () => {
    const {token, logout} = useAuth();
    const [user,setUser] = useState<User | null>(null);
    const navigate =useNavigate();

    useEffect(()=>{
        if(!token){
            navigate("/login");
            return;
        }

        const fetchUser = async () => {
            try {
                const res = await  axios.get("https://api.freeapi.app/api/v1/users/current-user", {
                    headers: { Authorization: `Bearer ${token}`}
                });
                console.log("User response:", res.data);
                setUser(res.data.data);
            }catch(error){
                console.error(error);
                logout();
                navigate("/login");
            }
        };

        fetchUser();
    },[token,logout,navigate]);

  return (
    <div>
        <h2>Dashboard</h2>
        {user ? (
            <div>
                <p>Welcome, {user.username}</p>
                <p>Email: {user.email}</p>
                <button onClick={()=>{logout();navigate("/Login");}}>Logout</button>
            </div>
        ):(
            <p>Loading.....</p>
        )}
      
    </div>
  )
}

export default Dashboard
