const { response } = require("express")
const Employee=require("./employee.model")
const fs=require("fs")
//Show the list of the Employee
const index=(req, res, next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.status(400).json({
            error
        })
    })
}


//Show Single employee
const show=(req, res, next)=>{
    let employeeID=req.body.employeeID
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"An Error Occured!"
        })
    })
}


//Add new Employee

const store=(req, res, next)=>{
    let employee=new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        salary:req.body.salary


    })
    if(req.file){
        employee.image=req.file.path
    }
    employee.save()
    .then(response=>{
        res.json({
            message:"Employee Added Successfully!"
        })
    })
    .catch(error=>{
        res.status(400).json({
            message:"An Error Occured!"
        })
    })
}

//update employee by their employee ID

const update=(req, res, next)=>{
    let employeeID=req.body.employeeID

    let updatedData={
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        salary:req.body.salary,
        image:req.body.image

    }
    //Mongoose query for update data
    Employee.findByIdAndUpdate(employeeID, {$set:updatedData})
    .then(()=>{
        res.json({
            message:"Employee Updated Successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"An Error Occured!"
        })
    })
}

//delete an employee

const deleteEmployee=(req, res, next)=>{
    let employeeID=req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message:"Employee deleted Successfully!"
        })
    })
    .catch(error=>{
        res.status(404).json({
            
            message:`Employee with id: ${req.body.employeeID} not found`
        })
        
    })

}

module.exports={
    index, show, store, update, deleteEmployee
}