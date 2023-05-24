import React, { useEffect, useState } from 'react'
import { NavLink,Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Select from "react-select";
import Swal from 'sweetalert2';



const UpdateEmployee = () => {

    const [employee, setEmployee] = React.useState({});
    const [type, setType] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [experience, setExperience] = React.useState("");
    const params = useParams();
    const employeeID = params.id;
    const history = useNavigate();

    useEffect(() => {
        const getOneEmp = async () => {
          await axios
            .get(`http://localhost:5000/employee/${employeeID}`)
            .then((res) => {
              setEmployee(res.data);
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        };
      
        getOneEmp();
      }, []);

      const sendRequest = async() =>{

        await axios.put(`http://localhost:5000/employee/update/${employeeID}` , {
      

        fullName:String(employee.fullName),
        initial:String(employee.initial),
        display:String(employee.display),
        gender:String(employee.gender),
        dateOfBirth:String(employee.dateOfBirth),
        email:String(employee.email),
        mobileNumber:String(employee.mobileNumber),
        designation:String(employee.designation),
        type:String(employee.type),
        joinDate:String(employee.joinDate),
        experience:String(employee.experience),
        salary:String(employee.salary),
        notes:String(employee.notes),


            
      
        }).then(()=>{
      
            Swal.fire({
                title: "Success!",
                text: "Place Details Updated Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
            
        })      
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history(`/`));
    };

    const handleChange =(e)=>{

        setEmployee((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
            // type:type,
            // gender:gender,
            // experience:experience,
        }))
      }

  return (
    <>
    <div style={{ display:'grid' }}>
        <h1 className='mx-4 mt-3 text-lg font-bold border-b-1 pb-4'>Update People</h1>
        <Link to='/'>
        <button type="button" class="btn-close" aria-label="Close" style={{ cursor:'pointer',position:'absolute',padding:'0px 16px', top:'30px',  right:'20px', marginTop:'3px'}}></button>
        </Link>
    </div>
    <hr></hr>
    <div>
    <div className='mx-5 mt-10'> 
        <form class="row g-3">
            <div class="col-12">
                <label class="form-label" style={{ color:'#00318C' }}>Full Name*</label>
                <input type="text" class="form-control" id="fullName" name='fullName' value={employee.fullName} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Name with initials*</label>
                <input type="text" class="form-control" id="initial" name='initial' value={employee.initial} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Preferred / Display Name</label>
                <input type="text" class="form-control" id="displa" name='display' value={employee.display} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Gender</label>
                <select class="form-select"  name='gender' id='gender' onChange={handleChange} >
                      <option selected disabled>{employee.gender}</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                  </select>
                {/* <Select 
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                  onChange={(e) => setGender(e.label)}
                /> */}
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Date of Birth</label>
                <input type="date" class="form-control" id="dateOfBirth" name='dateOfBirth' value={employee.dateOfBirth} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Email</label>
                <input type="email" class="form-control" id="email" name='email' value={employee.email} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Mobile Number</label>
                <input type="phone" class="form-control" id="mobileNumber" name='mobileNumber' value={employee.mobileNumber} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Designation</label>
                <input type="text" class="form-control" id="designation" name='designation' value={employee.designation} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Employee Type</label>
                <select class="form-select"  name='type' id='type' onChange={handleChange} >
                      <option selected disabled>{employee.type}</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract Basis">Contract Basis</option>
                      <option value="Other">Other</option>
                  </select>
                {/* <Select
                  options={[
                    { value: "Full Time", label: "Full Time" },
                    { value: "Part Time", label: "Part Time" },
                    { value: "Contract Basis", label: "Contract Basis" },
                    { value: "Other", label: "Other" },
                  ]}
                  onChange={(e) => setType(e.label)}
                /> */}
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Joined Date</label>
                <input type="date" class="form-control" id="joinDate" name='joinDate' value={employee.joinDate} onChange={handleChange} required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Experience</label>
                
                <select class="form-select"  name='experience' id='experience' onChange={handleChange} >
                      <option selected disabled>{employee.experience}</option>
                      <option value="1 Years">1 Years</option>
                      <option value="2 Years">2 Years</option>
                      <option value="3 Years">3 Years</option>
                      <option value="4 Years">4 Years</option>
                      <option value="5 Years">5 Years</option>
                      <option value="6 Years">6 Years</option>
                      <option value="7 Years">7 Years</option>
                      <option value="8 Years">8 Years</option>
                      <option value="9 Years">9 Years</option>
                </select>    

            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Salary</label>
                <input type="text" class="form-control" id="salary" name='salary' value={employee.salary} onChange={handleChange} required/>
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label" style={{ color:'#00318C' }}>Personal Notes</label>
                <textarea type="text" class="form-control" id="notes" name='notes' value={employee.notes} onChange={handleChange} />
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary" style={{ float:'right', marginTop:'10px', marginLeft:'5px' }} onClick={handleSubmit}>Update People</button>
            <Link to='/'>
            <button type="submit" class="btn btn-outline-primary" style={{ float:'right', marginTop:'10px' }}>Cancel</button>
            </Link>
            </div>
        </form>
    </div> 
    </div>
     

    </>
  )
}

export default UpdateEmployee
