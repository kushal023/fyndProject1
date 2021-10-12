const express=require("express")
const router=express.Router()

const   {index,show ,store,update,deleteEmployee}=require("./employee.controller")
const upload              =require("./employee.upload")
const authenticate        =require("../user/user.authenticate")

router.get("/",authenticate,index)
router.get("/show",show)
router.post("/store",upload.single('image'),store)
router.post("/update",upload.single('image'),update)
router.post("/deleteEmployee",deleteEmployee)

module.exports=router
