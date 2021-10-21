const express=require("express")
const router=express.Router()
const employeeValidation=require("./employee.validator")
const   {index,show ,store,update,deleteEmployee}=require("./employee.controller")
const upload=require("./employee.upload")
const authenticate=require("../user/user.authenticate")

router.get("/",authenticate,index)
router.get("/show",show)
router.post("/store",employeeValidation ,upload.single('image'),store)
router.post("/update",upload.single('image'),update)
router.delete("/deleteEmployee",deleteEmployee)

module.exports=router
