const express = require('express');
const router = express.Router();
const countModel = require('../models/counter');
const employeeModel = require('../models/employee');


//add employee
router.post('/add', async (req, res) => {
    try {
      const counter = await countModel.findOneAndUpdate(
        { id: "empId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
  
      const employee = new employeeModel({
        fullName: req.body.fullName,
        initial: req.body.initial,
        display: req.body.display,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        designation: req.body.designation,
        type: req.body.type,
        joinDate: req.body.joinDate,
        experience: req.body.experience,
        salary: req.body.salary,
        notes: req.body.notes,
        empId: counter.seq,
      });
  
      const result = await employee.save();
      if (result) {
        res.send({
          status: 200,
          message: "Employee Saved",
          employee: result,
        });
      } else {
        res.send({
          status: 500,
          message: "Error in Saving Employee",
        });
      }
    } catch (err) {
      res.send({
        status: 500,
        message: err.message,
      });
    }
});
  

  //get emplyees
  router.get('/getEmployee', async (req, res) => {
    let { selectEmpType, page, limit } = req.query;
    let filter = {};
  
    if (selectEmpType !== "null") {
      filter.eType = selectEmpType;
    }
  
    if (!page) {
      page = 1;
    }
  
    if (!limit) {
      limit = 5;
    }
  
    const size = parseInt(limit);
    const skip = (page - 1) * size;
  
    try {
      const employees = await employeeModel.find(filter).skip(skip).limit(size);
      res.send(employees);
    } catch (err) {
      res.status(500).send({
        status: 500,
        message: err.message,
      });
    }
  });


  //get employee by id
  router.get('/:id', (req, res) => {
    employeeModel.findById(req.params.id)
      .then(employeemodel => res.json(employeemodel))
      .catch(err => res.status(404).json({ noitemfound: 'No employee found' }));
  });

  //update employee
  router.put('/update/:id', (req, res) => {
      employeeModel.findByIdAndUpdate(req.params.id, req.body)
        .then(employeemodel => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
          res.status(400).json({ error: 'Unable to update the Database' })
        );
    });


 //delete employee
 router.delete("/delete/:id", (req, res) => {
    employeeModel.findByIdAndRemove(req.params.id, req.body)
      .then((employeemodel) => res.json({ msg: "Employee entry deleted successfully" }))
      .catch((err) => res.status(404).json({ error: "No such a Employee" }));
  }); 


  module.exports = router;

// const express = require("express");
// const {addEmployee, getEmployee, getEmployeeByID, updateEmployee, deleteEmployee} = require("../controllers/employee");

// const router = express.Router();

// //add employee
// router.post("/add", addEmployee);
// //get employees
// router.get("/get", getEmployee);
// //get employee by id
// router.get("/getId/:id", getEmployeeByID);
// //update employee
// router.put("/update/:id", updateEmployee);
// //delete employee
// router.delete("/delete/:id", deleteEmployee);

// module.exports = router;
