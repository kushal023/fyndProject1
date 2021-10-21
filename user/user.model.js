const mongoose=require("mongoose")
const validator=require("validator")

const UserSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:{type:String, default:"admin", enum:["admin","superadmin"]},
    phone:{type:String, required:true, unique:true},
    password:{type:String, required:true}
},{timestamps:true})

const User=mongoose.model("User", UserSchema)

module.exports=User