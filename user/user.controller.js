const express=require("express")
const bcrypt=require("bcryptjs")
const User=require("./user.model")
const jwt=require("jsonwebtoken")

const register=(req,res,next)=>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
            let user=new User({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                password:hashedPass
        
            })
            user.save()
            .then(user=>{
                res.json({
                    message:"User Added Successfully!"
                })
            })
            .catch(error=>{
                res.json({
                    message:"An errror occured"
                })
            })
        })
    }
        
const login=(req, res, next)=>{
    var username=req.body.username
    var password=req.body.password

    User.findOne({$or:[{email:username},{phone:username}]})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({name:user.name}, process.env.ACCESS_TOKEN_SECRET, {expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME})
                    res.status(200).json({
                        message:"Login Successfully!",
                        token:token
                    })
                }else{
                    res.status(200).json({
                        message:"Password does not matched!"
                    })
                }
            })
        }else{
            res.json({
                message:"No User Found!"
            })
        }
    })

}
        
    
 


module.exports={
    register, login
}





