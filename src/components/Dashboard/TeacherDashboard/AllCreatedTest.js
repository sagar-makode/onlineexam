import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherCreatedTests } from '../../actions/testActions';
import { DeleteTestDataTemp } from '../../actions/testActions';
import Swal from 'sweetalert2/dist/sweetalert2.js'



function AllCreatedTest() {

    const trachertestData = useSelector(state => state.tests.teacherCreatedTest);
    const deleteTestMsg=useSelector(state=>state.tests.deleteTestDataSuccessMsg);
    const [clickOnDelete,setClickOnDelete]=useState(1)
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTeacherCreatedTests())
    },[dispatch,clickOnDelete,deleteTestMsg]);


    const handleDeleteTest=(testId)=>{
        const dispatchedData={
            testId:testId
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You are able to revert this from Trash!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Test has been moved to Trash.",
                icon: "success"
              });
              dispatch(DeleteTestDataTemp(dispatchedData));
              setClickOnDelete(clickOnDelete+1);      
            }
            else{
                console.log("Not moved to trash : Something Went Wrong")
            }
          });         
    }

        return (
        <div>
            <h1>All Created Test</h1>
            <div className="row">
                {trachertestData.map((test, index) => (
                    <div className="col-md-4" key={index}>

                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Test Name: {test.testName} </h5>
                                    <button style={{ border: "gray", background: "white" }}
                                                    type="button"
                                                    onClick={()=>handleDeleteTest(test._id)}
                                                    id={test._id} 
                                                    name={test.testName}
                                              
                                                >
                                                    <span className="material-symbols-outlined text-danger" style={{ fontSize: "35px" }}>
                                                        delete
                                                    </span>
                                                </button>
                                                
                                    {/* <img src={Trash} style={{ height: "2.5rem", width: "2.5rem" }} id={test._id} name={test.testName} onClick={handleDeleteTest} alt='Trash' /> */}
                                </div>
                                <p className="card-text">Category: {test.category}</p>
                                <p className="card-text">Total Questions: {test.questions.length}</p>
                                <p className="card-text">Duration: {test.totalMinutes} minutes</p>
                                <p className="card-text">Toatal Marks: {test.totalMarks} minutes</p>
                              
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default AllCreatedTest