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

      if(res.data.message === "Login success"){
        navigate("/home");
      } else {
        alert("Invalid login");
      }

    } catch(err){
      console.log(err);
    }

  };

return(
  <div className="auth-container">

      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
      <p onClick={()=>navigate("/register")}>
  New user? Register
</p>


    </div>
  );
}
