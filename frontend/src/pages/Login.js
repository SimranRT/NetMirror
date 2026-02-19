import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

export default function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {

    try {

      const res = await loginUser({email,password});

      console.log("LOGIN RESPONSE:", res.data); // DEBUG

      // Accept any success response safely
      if(
        res.data === "Login success" ||
        res.data?.message === "Login success"
      ){
        navigate("/home");
      }else{
        alert("Invalid login");
      }

    } catch(err){
      console.log("LOGIN ERROR:", err);
      alert("Server error or backend waking up. Try again.");
    }

  };

  return(
    <div className="auth-container">

      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p onClick={()=>navigate("/register")}>
        New user? Register
      </p>

    </div>
  );
}
