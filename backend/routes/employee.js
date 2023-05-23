const express = require("express");
const {addEmployee, getEmployee, getEmployeeByID, updateEmployee, deleteEmployee} = require("../controllers/employee");

const router = express.Router();

//add employee
router.post("/add", addEmployee);
//get employees
router.get("/get", getEmployee);
//get employee by id
router.get("/getId/:id", getEmployeeByID);
//update employee
router.put("/update/:id", updateEmployee);
//delete employee
router.delete("/delete/:id", deleteEmployee);

module.exports = router;
