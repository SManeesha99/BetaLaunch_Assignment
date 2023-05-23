import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import ReactPaginate from "react-paginate";
import axios from 'axios'
import Swal from 'sweetalert2';

const ViewEmployee = () => {

    const [employee, setEmployee] = React.useState([]);
    const [selectEmpType, setSelectEmpType] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [limit, setLimit] = React.useState(5);

    useEffect(() => {
        const getAllEmployee = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/employee/getEmployee`, {
              params: {
                page: page,
                limit: limit,
                type: selectEmpType !== "null" ? selectEmpType : undefined
              }
            });
            setEmployee(response.data);
            console.log(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
      
        getAllEmployee();
      }, [page, limit, selectEmpType]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:5000/employee/getEmployee', {
    //           params: {
    //             selectEmpType,
    //             page,
    //           },
    //         });
    //         setEmployee(response.data.emp);
    //       } catch (error) {
    //         console.error('Error:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, [selectEmpType, page]);
        
    const type = [
        { value: "Full Time", label: "Full Time" },
        { value: "Part Time", label: "Part Time" },
        { value: "Contract Basis", label: "Contract Basis" },
        { value: "Other", label: "Other" },
    ];

    const handleChangeSelectEmpType = (selectedOption) => {
        setSelectEmpType(selectedOption.value);
      };

    const handlePageClick = async (data) => {
        setPage(data.selected + 1);
      };


      const deleteItem = async (empId) => {
        try{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.value === true) {
                  const res =  axios.delete(`http://localhost:5000/employee/delete/${empId}`).then((res) => {
                    if (res) {
                      Swal.fire({
                        title: "Success!",
                        text: "Your file has been deleted",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                      }).then(() => {
                        window.location.href = "/";
                      });
                    } else {
                      Swal.fire({
                        title: "Error!",
                        text: "Something went wrong",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  });
                }
              });
      
        }catch(err){
            console.log(err.data.msg);
        }
      }


  return (
    <>
        <div>
        <h1 className='mx-5 mt-5 text-lg font-bold border-b-1 pb-4'>People</h1>
        </div>
        <hr></hr>
        
        {/* <div className='mx-5 mt-5'>
        <div className="mr-5">
            <Select
              options={type}
              value={selectEmpType}
              onChange={handleChangeSelectEmpType}
              placeholder="Select employee type"
            />
          </div>
         </div>    */}

        <div className='mx-5 mt-5'>
            <Link to='/addemployee'>
            <button type="button" className="btn btn-primary"  style={{ float:'right', marginLeft:'10px' }}>Add People</button>
            </Link>
         </div>   

         <div className="mx-5 mt-5">
            <div className="dropdown">
                <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ float: "right", marginBottom: "10px", fill: "Solid", color: "black" }}
                >
                Employee Type
                </button>
                <ul className="dropdown-menu">
                {type.map((option) => (
                    <li key={option.value}>
                    <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleChangeSelectEmpType(option)}
                    >
                        {option.label}
                    </a>
                    </li>
                ))}
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
                {employee.map((emp, index) => {
                    return(
                        <tr key={index}>
                        <td>{emp.display}</td>
                        <td>{emp.employeeID}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.type}</td>
                        <td>{emp.experience}</td>
                        <td>
                            
                            <button type="button" className="btn"  style={{ float:'right', marginLeft:'10px', color:'red' }} onClick={()=>deleteItem(emp._id)}>Delete</button>
                            
                            <Link to={`/update/${emp._id}`}>
                            <button type="button" className="btn"  style={{ float:'right', marginLeft:'10px', color:'blue' }}>Edit</button>
                            </Link>
                        </td>
                        </tr>
                    );
                        
                })}
                
            </tbody>
            {/* <tfoot className='table-light'>
                
            </tfoot> */}

        </table>
        <div>
            {" "}
            <ReactPaginate
              className="flex flex-row p-3 gap-x-2"
              breakLabel={"..."}
              pageCount={limit}
              onPageChange={handlePageClick}
              nextLabel="next >"
              previousLabel="< previous"
            />
          </div>
        
        </div>
        
    </>
  )
}
export default ViewEmployee