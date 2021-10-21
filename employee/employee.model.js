const mongoose=require("mongoose")
const validator=require("validator")

const employeeSchema=new mongoose.Schema({
    name:{type:String, required:true},
    designation:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    phone:{type:Number, required:true, unique:true},
    age:{type:Number, required:true},
    salary:{type:Number, required:true},
    image:{type:String},

}, {timestamps:true})

const Employee=mongoose.model('Employee', employeeSchema)
module.exports=Employee