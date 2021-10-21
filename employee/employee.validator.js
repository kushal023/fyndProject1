const joi=require("joi")


const validation=joi.object({
    name:joi.string().alphanum().min(3).max(25).trim(true).required(),
    designation:joi.string().alphanum().min(3).max(25).trim(true).required(),
    email:joi.string().email().trim(true).required(),
    phone:joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    age:joi.string().required(),
    salary:joi.string().min(4).max(10).required(),
    

})


const employeeValidation = (req, res, next) => {
	const payload = {
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        salary:req.body.salary
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
		return res.json(
			`Error in User Data : ${error.message}`
		);
	} else {
		next();
	}
};
module.exports = employeeValidation;

