const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));


// CREATE TABLE (RUN ONLY ONCE)
db.query(`
CREATE TABLE IF NOT EXISTS users(
 id INT AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(100),
 email VARCHAR(100),
 password VARCHAR(255),
 phone VARCHAR(20)
)
`, (err)=>{
 if(err){
   console.log("Table creation error:", err);
 } else {
   console.log("Users table ready ✅");
 }
});

app.listen(5000,()=>console.log("Server running"));
