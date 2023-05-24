import React from 'react'
import { Link } from 'react-router-dom'
import Select from "react-select";
import Swal from 'sweetalert2'
import axios from 'axios'

const AddEmployee = () => {

  const  [fullName, setFullName] = React.useState('')
  const  [initial, setInitial] = React.useState('')
  const  [display, setDisplay] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [dateOfBirth, setDateOfBirth] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [mobileNumber, setMobileNumber] = React.useState('')
  const [designation, setDesignation] = React.useState('')
  const [type, setType] = React.useState('')
  const [joinDate, setJoinDate] = React.useState('')
  const [experience, setExperience] = React.useState('')
  const [salary, setSalary] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [employeeID, setEmployeeID] = React.useState('')

  const [epmPlayload, setEpmPlayload] = React.useState({
    fullName: "",
    initial: "",
    display: "",
    gender: "", 
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    designation: "",
    type: "",
    joinDate: "",
    experience: "",
    salary: "",
    notes: "",

  });

  const onChangeInput = (e) => {
      setEpmPlayload({
          ...epmPlayload,
          [e.target.id]: e.target.value,
          type:type,
          gender:gender,
          experience:experience,
      });
  };



  const handleSubmit = async(e)=> {
      
    e.preventDefault();
    try{
      console.log(epmPlayload)
            const res = await axios.post("http://localhost:5000/employee/add",epmPlayload);
            console.log(res);
            Swal.fire({
                title: "Success!",
                text: "Emplyee added successfully",
                icon: 'success',
                timer: 2000,
                button: false,
            }).then(()=>{
                window.location.href = "/";
            })
      
    }catch(err){
        Swal.fire({
            title: "Error!",
            text: "Job not added",
            icon: 'error',
            timer: 2000,
            button: false,
        })
    }

    
  }

  return (
    <>
    <div style={{ display:'grid' }}>
        <h1 className='mx-4 mt-3 text-lg font-bold border-b-1 pb-4'>Add People</h1>
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
                <input 
                  type="text" 
                  class="form-control" 
                  id='fullName' 
                  name='fullName'   
                  onChange={(e) => onChangeInput(e)}
                  required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Name with initials*</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id='initial'
                  name='initial'  
                  onChange={(e) => onChangeInput(e)}
                  required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Preferred / Display Name</label>
                <input 
                type="text" 
                class="form-control" 
                id="display" 
                name='display' 
                onChange={(e) => onChangeInput(e)}
                required/>
            </div>
            <div class="col-md-6">
                <label class="form-label"  style={{ color:'#00318C' }}>Gender</label>
                <Select name='gender' id='gender'
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                  onChange={(e) => {
                    setGender(e.label);
                  }}
                />
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Date of Birth</label>
                <input 
                type="date" 
                class="form-control" 
                id="dateOfBirth" 
                name='dateOfBirth' 
                onChange={(e) => onChangeInput(e)}
                required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Email</label>
                <input 
                type="email" 
                class="form-control" 
                id="email" 
                name='email' 
                onChange={(e) => onChangeInput(e)}
                required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Mobile Number</label>
                <input 
                type="tel" 
                class="form-control" 
                id="mobileNumber" 
                name='mobileNumber'
                onChange={(e) => onChangeInput(e)}
                required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Designation</label>
                <input 
                type="text" 
                class="form-control" 
                id="designation" 
                name='designation'
                onChange={(e) => onChangeInput(e)}
                required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Employee Type</label>
                <Select
                  name="type" id='type'
                  options={[
                    { value: "Full Time", label: "Full Time" },
                    { value: "Part Time", label: "Part Time" },
                    { value: "Contract Basis", label: "Contract Basis" },
                    { value: "Other", label: "Other" },
                  ]}
                  onChange={(e) => {
                    setType(e.label);
                  }}
                />
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Joined Date</label>
                <input 
                type="date" 
                class="form-control" 
                id="joinDate" 
                name='joinDate'  
                onChange={(e) => onChangeInput(e)}
                required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Experience</label>
                <Select name='experience'
                   options={[
                    { value: "01 Years", label: "01 Years" },
                    { value: "02 Years", label: "02 Years" },
                    { value: "03 Years", label: "03 Years" },
                    { value: "04 Years", label: "04 Years" },
                    { value: "05 Years", label: "05 Years" },
                    { value: "06 Years", label: "06 Years" },
                    { value: "07 Years", label: "07 Years" },
                    { value: "08 Years", label: "08 Years" },
                    { value: "09 Years", label: "09 Years" },
                  ]}
                  onChange={(e) => {
                    setExperience(e.label);
                  }}
                />
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Salary</label>
                <input 
                type="text" 
                class="form-control" 
                id="salary" 
                name='salary'  
                onChange={(e) => onChangeInput(e)}
                required/>
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label" style={{ color:'#00318C' }}>Personal Notes</label>
                <textarea 
                type="text" 
                class="form-control" 
                id="notes"
                onChange={(e) => onChangeInput(e)}
                name='notes' />
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary" style={{ float:'right', marginTop:'10px', marginLeft:'5px' }} onClick={handleSubmit}>Add People</button>
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

export default AddEmployee