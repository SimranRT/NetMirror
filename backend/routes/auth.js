const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");


// REGISTER
router.post("/register", async (req,res)=>{

 const {username,email,password,phone} = req.body;

 const hashedPassword = await bcrypt.hash(password,10);

 db.query(
  "INSERT INTO users(username,email,password,phone) VALUES (?,?,?,?)",
  [username,email,hashedPassword,phone],
  (err,result)=>{

    if(err){
      return res.json({message:"User already exists"});
    }

    res.json({message:"Register success"});
  }
 );
});


// LOGIN
router.post("/login",(req,res)=>{

 const {email,password} = req.body;

 db.query(
  "SELECT * FROM users WHERE email=?",
  [email],
  async (err,result)=>{

    if(err) return res.json("Server error");

    if(!result || result.length===0)
      return res.json("User not found");

    const valid = await bcrypt.compare(password,result[0].password);

    if(!valid)
      return res.json("Wrong password");

    res.json({message:"Login success"});
  }
 );

});

module.exports = router;
