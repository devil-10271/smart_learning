const express = require("express")
const mysql = require("mysql")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "smart_learning"
})

if (db){
    console.log("Conneced to db.")
}else{
    console.log("not connected to db.")
}


app.post('/', (req, res) => {
    const que = `CREATE TABLE SIGNUP(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'faculty', 'admin') DEFAULT 'student') `
    db.query(que, (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json(data)
    })
})


app.post('/Sign_up', (req, res) => {
    // console.log("Incoming body:", req.body);  // 👀 Check this in terminal

    const que = `INSERT INTO SIGNUP (name, email, password, role) VALUES (?, ?, ?, ?)`;

    //   const signup_data = [
    //     req.body[0],  // name
    //     req.body[1],  // email
    //     req.body[2],  // password
    //     req.body[3]  // role
    // ];

    const signup_data=[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role,
    ]

    db.query(que, signup_data, (err, data) => {
        if (err) {
            console.error("DB Error:", err);
            return res.json(err);
        }
        res.json("Signup Successfully");
    });
});

app.post("/Login",(req,res)=>{
    console.clear();
    // console.log("request : ",req.body)
    // console.log(chl_data)
    const que = `SELECT * FROM SIGNUP where email=? and password =? and role=?;`

    db.query(que,req.body,(err,data)=>{
        if(err){
            // console.error("LOGIN ERROR : ",err)
            return res.json(err) 
        }
        // console.log(data,err)   
        res.json({message:"Login Sucess",fetch_data:data})

    })

})

const port = 8081
app.listen(port, () => {
    console.log(`Listning . . . on http://localhost:${port}`)
})