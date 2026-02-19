const express = require("express");
const router = express.Router();


router.post("/register", async (req,res)=>{

 const {username,email,password,phone} = req.body;

 const bcrypt = require("bcryptjs");

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
module.exports = router;
