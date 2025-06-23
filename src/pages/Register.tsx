import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { RegisterResponse } from "../type/api";

type Formtype = {
  username: string;
  email: string;
  role: string;
  password: string;
};

const Register = () => {
  const [form, setForm] = useState<Formtype>({
    username: "",
    email: "",
    role: "ADMIN",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("All fields are required.");
      return;
    }

    try {
      await axios.post(
        "https://api.freeapi.app/api/v1/users/register",
        form
      );
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error: any) {
      console.error("API Error:", error.response?.data);
      alert(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative bg-cover bg-no-repeat bg-center" style={{backgroundImage :"url('https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')"}}>
      <h2 className="text-2xl font-bold m-4 font-serif">Register</h2>
      <div  className="bg-gray-400 w-[500px] h-auto shadow-lg shadow-black/20 rounded p-6 opacity-80">
      <form onSubmit={handleSubmit} className="flex flex-col w-full justify-center items-center mt-8">
        <input
          type="text"
          placeholder="Username"
          className="border-2 bg-white p-1 w-2/4 m-2 shadow-lg shadow-black/20"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 bg-white p-1 w-2/4 m-2 shadow-lg shadow-black/20"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
                    className="border-2 bg-white p-1 m-2 w-2/4 shadow-lg shadow-black/20"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <select
        className="bg-white p-2 rounded border-2 mt-2 shadow-lg shadow-black/20"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="ADMIN">ADMIN</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white border-none rounded-xl p-2 m-2 shadow-lg shadow-black/20 hover:text-xl hover:bg-blue-900">Register</button>
      </form>
      </div>
    
    </div>
  );
};

export default Register;
