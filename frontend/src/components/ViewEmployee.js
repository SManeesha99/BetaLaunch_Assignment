import React from 'react'
import { Link } from 'react-router-dom'

export const ViewEmployee = () => {
  return (
    <>
        <div>
        <h1 className='mx-5 mt-5 text-lg font-bold border-b-1 pb-4'>People</h1>
        </div>
        <hr></hr>

        <div className='mx-5 mt-5'>
            <Link to='/addemployee'>
            <button type="button" className="btn btn-primary"  style={{ float:'right', marginLeft:'10px' }}>Add People</button>
            </Link>
         </div>   

        <div className='mx-5 mt-5'>
            <div className="dropdown ">
                <button className="btn btn btn-outline-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ float:'right', marginBottom:'10px', Fill: 'Solid', color:'black' }}>
                    Employee Type
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
         </div>   

         

        <div className='mx-5 mt-5'>
        <table className="table">
            <thead className='table-light'>
                <tr>
                <th scope="col" style={{ padding:'3px' }}>Dispply Name</th>
                <th scope="col" style={{ padding:'3px' }}>Emp Id</th>
                <th scope="col" style={{ padding:'3px' }}>Designation</th>
                <th scope="col" style={{ padding:'3px' }}>Emp Type</th>
                <th scope="col" style={{ padding:'3px' }}>Experience</th>
                <th scope="col" style={{ padding:'3px' }}></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Maneesha Fernando</td>
                <td>001</td>
                <td>Ux Designer</td>
                <td>Part Time</td>
                <td>4 Years</td>
                <td>
                    <button type="button" className="btn"  style={{ float:'right', marginLeft:'10px', color:'red' }}>Delete</button>
                    <button type="button" className="btn"  style={{ float:'right', marginLeft:'10px', color:'blue' }}>Edit</button>
                </td>
                </tr>
            </tbody>
            {/* <tfoot className='table-light'>
                
            </tfoot> */}

        </table>
        </div>
        
    </>
  )
}
