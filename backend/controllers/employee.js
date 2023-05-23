// const employeeModel = require('../models/employee');
// const  countModel  = require('../models/counter');

// const employeeController = {

//     addEmployee: async (req, res) => {
//         try {
//             const counter = await countModel.findOneAndUpdate(
//                 { id: "employeeID" },
//                 { $inc: { seq: 1 } },
//                 { new: true, upsert: true }
//             );
    
//             const employee = new employeeModel({
                
//                 fullName: req.body.fullName,
//                 initial: req.body.initial,
//                 display: req.body.display,
//                 gender: req.body.gender,
//                 dateOfBirth: req.body.dateOfBirth,
//                 email: req.body.email,
//                 mobileNumber: req.body.mobileNumber,
//                 designation: req.body.designation,
//                 type: req.body.type,
//                 joinDate: req.body.joinDate,
//                 experience: req.body.experience,
//                 salary: req.body.salary,
//                 notes: req.body.notes,
//                 employeeID: counter.seq, 
//             });
    
//             const result = await employee.save();
//             if (result) {
//                 res.send({
//                     status: 200,
//                     message: "Employee Saved",
//                     employee: result,
//                 });
//             } else {
//                 res.send({
//                     status: 500,
//                     message: "Error in Saving Employee",
//                 });
//             }
//         } catch (err) {
//             res.send({
//                 status: 500,
//                 message: err.message,
//             });
//         }


//     },

    // getEmployee: async (req, res) => {
    //     let {selectEmpType, page, limit} = req.query;
    //     let filter = {};
    //     if(selectEmpType ==! "null"){
    //         filter.type = selectEmpType;
    //     }

    //     if(!page){
    //         page = 1;
    //     }

    //     if(!limit){
    //         limit = 5;
    //     }

    //     const size = parseInt(limit);
    //     const skip = (page - 1) * limit;
    //     const emp = await employeeModel.find(filter).skip(skip).limit(size);
    //     res.send({emp});

    // },

//     getEmployeeByID: async (req, res) => {
//         try {
//           const emp = await employeeModel.findById(req.params.id);
//           if (!emp) {
//             return res.status(404).send({ error: 'Employee not found' });
//           }
//           res.send({ emp });
//         } catch (error) {
//           console.error(error);
//           res.status(500).send({ error: 'Internal server error' });
//         }
//     },

//     updateEmployee: async (req, res) => {
//         try{
//             const emp = await employeeModel.findByIdAndUpdate(
             
//              {   
//                 _id : req.params.id,
//              },
//                 {
//                     fullName: req.body.fullName,
//                     initial: req.body.initial,
//                     display: req.body.display,
//                     gender: req.body.gender,
//                     dateOfBirth: req.body.dateOfBirth,
//                     email: req.body.email,
//                     mobileNumber: req.body.mobileNumber,
//                     designation: req.body.designation,
//                     type: req.body.type,
//                     joinDate: req.body.joinDate,
//                     experience: req.body.experience,
//                     salary: req.body.salary,
//                     notes: req.body.notes,
//                 },
//                 {
//                     new: true
//                 }

//             );
//             if(emp){
//                 res.send({
//                     status: 200,
//                     message: "Employee Updated",
//                     emp: emp,
//                 });
//             }else{
//                 res.send({
//                     status: 500,
//                     message: "Error in Updating Employee",
//                 });
//             }

//         }catch(err){
//             res.send({
//                 status: 500,
//                 message: err.message,
//             });
//         }
//     },

//     deleteEmployee: async (req, res) => {
//         try{
//             const emp = await employeeModel.findByIdAndDelete(req.params.id);
//             if(emp){
//                 res.send({
//                     status: 200,
//                     message: "Employee Deleted",
//                 });
//             }else{
//                 res.send({
//                     status: 500,
//                     message: "Error in Deleting Employee",
//                 });
//             }

//         }catch(err){
//             res.send({
//                 status: 500,
//                 message: err.message,
//             });
//         }
//     }



// };

// module.exports = employeeController;