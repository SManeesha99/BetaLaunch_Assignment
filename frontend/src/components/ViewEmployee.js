import React from 'react'

export const ViewEmployee = () => {
  return (
    <>
        <div>
        <h1 className='mx-5 mt-5 text-lg font-bold border-b-1 pb-4'>People</h1>
        </div>
        <hr></hr>

        <div className='mx-5 mt-5'>
            <button type="button" className="btn btn-primary" style={{ float:'right', marginLeft:'10px' }}>Add People</button>
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
        <table className="table table-bordered">
            <thead className='table-light'>
                <tr>
                <th scope="col">Dispply Name</th>
                <th scope="col">Emp Id</th>
                <th scope="col">Designation</th>
                <th scope="col">Emp Type</th>
                <th scope="col">Experience</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
            </tbody>
            {/* <tfoot className='table-light'>
                
            </tfoot> */}

        </table>
        </div>
        
    </>
  )
}
