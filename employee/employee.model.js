const mongoose=require("mongoose")


const employeeSchema=new mongoose.Schema({
    name:{type:String, required:true},
    designation:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    age:{type:Number, required:true},
    salary:{type:Number, required:true},
    image:{type:String, required:true},

}, {timestamps:true})

const Employee=mongoose.model('Employee', employeeSchema)
module.exports=Employee