const express=require("express")
const router=express.Router()

const EmployeeController  =require("./employee.controller")
const upload              =require("./employee.upload")
const authenticate        =require("../user/user.authenticate")

router.get("/",authenticate, EmployeeController.index)
router.post("/show", EmployeeController.show)
router.post("/store",upload.single('image'), EmployeeController.store)
router.post("/update", EmployeeController.update)
router.post("/deleteEmployee", EmployeeController.deleteEmployee)

module.exports=router
