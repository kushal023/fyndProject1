const express=require("express")
const mongoose=require("mongoose")
var morgan = require('morgan')
const bodyParser=require("body-parser")
const Port=process.env.PORT||3000

const EmployeeRoute=require("./employee/employee.route")
const UserRoute=require("./user/user.route")
const server=express()

mongoose.connect("mongodb://localhost:27017/fynddb",{useNewUrlParser: true, useUnifiedTopology: true},)

const db=mongoose.connection

db.on("error",(error)=>{
    console.error(error)
})

db.once("open",()=>{
    console.log("Database connection established!")
})





server.use(morgan('dev'))
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use("/uploads", express.static("uploads"))


server.listen(Port, (req, res)=>{
    console.log(`http://localhost:${Port}`)
})

server.use("/employee", EmployeeRoute)
server.use("/user", UserRoute)