const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,


});

//employee routes
const employeeRoutes = require("./routes/employee");
app.use("/employee", employeeRoutes);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected 🍀");
});


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT} ✨`);
})