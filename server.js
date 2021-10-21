const express=require("express")
const mongoose=require("mongoose")
const morgan = require('morgan')
const bodyParser=require("body-parser")

const dotenv=require("dotenv")
dotenv.config()
const {DB,PORT}=require("./config")


const EmployeeRoute=require("./employee/employee.route")
const UserRoute=require("./user/user.route")


mongoose.connect(DB,{useNewUrlParser: true, useUnifiedTopology: true},)

const db=mongoose.connection

db.on("error",(error)=>{
    console.error(error)
})

db.once("open",()=>{
    console.log("Database connection established!")
})




const server=express()
server.use(morgan('dev'))
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use("/uploads", express.static("uploads"))


server.listen(PORT, (req, res)=>{
    console.log(`http://localhost:${PORT}`)
})

server.use("/employee", EmployeeRoute)
server.use("/user", UserRoute)