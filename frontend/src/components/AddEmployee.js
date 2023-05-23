import React from 'react'
import { Link } from 'react-router-dom'
import Select from "react-select";

const AddEmployee = () => {
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
                <input type="text" class="form-control" id="fullName" name='fullName' placeholder="Full Name" required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Name with initials*</label>
                <input type="text" class="form-control" id="initial" name='initial' required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Preferred / Display Name</label>
                <input type="text" class="form-control" id="displayName" name='displayName' required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Gender</label>
                <Select
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                />
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Date of Birth</label>
                <input type="date" class="form-control" id="dateOfBirth" name='dateOfBirth' required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Email</label>
                <input type="email" class="form-control" id="email" name='email'required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Mobile Number</label>
                <input type="phone" class="form-control" id="mobileNumber" name='mobileNumber' required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Designation</label>
                <input type="text" class="form-control" id="designation" name='designation' required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Employee Type</label>
                <Select
                  options={[
                    { value: "Full Time", label: "Full Time" },
                    { value: "Part Time", label: "Part Time" },
                    { value: "Contract Basis", label: "Contract Basis" },
                    { value: "Other", label: "Other" },
                  ]}
                />
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Joined Date</label>
                <input type="date" class="form-control" id="joinDate" name='joinDate' required/>
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Experience</label>
                <Select
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
                />
            </div>
            <div class="col-md-6">
                <label class="form-label" style={{ color:'#00318C' }}>Salary</label>
                <input type="text" class="form-control" id="salary" name='salary' required/>
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label" style={{ color:'#00318C' }}>Personal Notes</label>
                <textarea type="text" class="form-control" id="notes" name='notes' />
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary" style={{ float:'right', marginTop:'10px', marginLeft:'5px' }}>Add People</button>
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