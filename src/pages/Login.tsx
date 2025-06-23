import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
// import { LoginResponse } from "../type/api";

type LoginForm = {
    username: string;
    password: string;
}

const Login = () => {
    const [loginForm, setLoginForm] = useState<LoginForm>({username:"", password:""})
    const navigate =useNavigate();
    const { login } = useAuth();

    const  handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try{
           const res = await axios.post("https://api.freeapi.app/api/v1/users/login", loginForm);

            const token = res.data.data.accessToken;

            if(token){
                login(token);
                alert("Login successful");
                navigate('/dashboard');
            }else{
                throw new Error("No token received");
            }
       
        }catch(error){
            console.error(error);
            alert("Login failed.")
        }
    }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')"}}>
      <h1 className='text-2xl font-bold m-4 font-serif'>Login</h1>
      <div className='bg-blue-300 w-[500px] h-auto shadow-lg shadow-black/20 rounded p-6 opacity-80'>
      <form onSubmit={handleSubmit} className="flex flex-col w-full justify-center items-center mt-2">
        <input   className="border-2 bg-white p-1 w-2/4 m-2 shadow-lg shadow-black/20" type="text" placeholder='Username' value={loginForm.username} onChange={(e)=>setLoginForm({...loginForm,username:e.target.value})} />
        <input   className="border-2 bg-white p-1 w-2/4 m-2 shadow-lg shadow-black/20" type="password" placeholder='Password' value={loginForm.password} onChange={(e)=>setLoginForm({...loginForm,password:e.target.value})} />
       <div>
       <button className="bg-blue-600 text-white border-none rounded-xl p-2 m-2 shadow-lg shadow-black/20 hover:text-xl hover:bg-blue-900" type="submit">Login</button>
       <button onClick={()=>navigate('/')} type="button" className='bg-gray-400 text-white border-none rounded-xl p-2 m-2 shadow-lg shadow-black/20 hover:text-xl hover:bg-blue-900'>Register</button>
       </div>
      
      </form>
     
      </div>
  
     
    </div>
  )
}

export default Login