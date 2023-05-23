const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeID: { 
        type: String 
    },
    fullName: { 
            type: String, 
            required: true 
        },
    initial: { 
            type: String, 
            required: true 
        },
    display: { 
            type: String, 
            required: true 
        },
    gender: { 
            type: String, 
            required: true 
        },
    dateOfBirth: { 
            type: String, 
            required: true 
        },
    email: { 
            type: String, 
            required: true 
        },
    mobileNumber: { 
            type: String, 
            required: true 
        },
    designation: { 
            type: String, 
            required: true 
        },
    type: { 
            type: String, 
            required: true 
        },
    joinDate: { 
            type: String, 
            required: true 
        },
    experience: { 
            type: String, 
            required: true 
        },
    salary: { 
            type: String, 
            required: true 
        },
    notes: { 
            type: String, 
            required: true 
        },
});

module.exports = mongoose.model("employee", employeeSchema);