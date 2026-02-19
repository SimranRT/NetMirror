import React, { useState } from "react";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Register(){

  const navigate = useNavigate();

  const [form,setForm] = useState({
    username:"",
    email:"",
    password:"",
    phone:""
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  };

  const submit = async () => {

    try{
      await registerUser(form);
      alert("Registered successfully ✅");
      navigate("/");
    }catch(err){
      console.log(err);
    }
  };

  return(

    <div className="auth-container">

      <h1>Register</h1>

      <input name="username" placeholder="Username" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
      <input name="phone" placeholder="Phone" onChange={handleChange}/>

      <button onClick={submit}>Register</button>

      <p onClick={()=>navigate("/")}>
        Already have account? Login
      </p>

    </div>
  );
}
