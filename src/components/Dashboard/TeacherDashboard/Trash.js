import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  DeleteTestDataPermanently, RestoreDeletedData, fetchTeacherCreatedTests, fetchTeacherCreatedTestsinBin } from '../../actions/testActions';
import Swal from 'sweetalert2/dist/sweetalert2.js'



function Bin() {
    const trachertestData = useSelector(state => state.tests.teacherCreatedTestInBin);
    const restoreSuccessMessage=useSelector(state=>state.tests.restoreSuccessMessage);
    const [clickOnDelete,setClickOnDelete]=useState(1)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTeacherCreatedTestsinBin())
        dispatch(fetchTeacherCreatedTests());
    }, [dispatch,clickOnDelete,restoreSuccessMessage]);


    const handleRestoreDeleteTests=(event)=>{
        
        // const dispatchedData={
        //     testId:event.target.id
        // }
        //
        const dispatchedData={
            testId:event.target.id
        }
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to restore the Test!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, restore it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Restored!",
                text: "Your Test has been Restored Successfully.",
                icon: "success"
              });
              dispatch(RestoreDeletedData(dispatchedData));
             setClickOnDelete(clickOnDelete+1);      
            }
            else{
                console.log("Not moved to all Test created Something Went Wrong")
            }
          });           
    }

    const handleDeleteTest=(event)=>{
        const dispatchedData={
            testId:event.target.id
        }
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete the Test Permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Test has been Deleted Successfully.",
                icon: "success"
              });
              dispatch(DeleteTestDataPermanently(dispatchedData));
              setClickOnDelete(clickOnDelete+1); 
            }
            else{
                console.log("Not moved to all Test created Something Went Wrong")
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
                                </div>
                                <p className="card-text">Category: {test.category}</p>
                                <p className="card-text">Total Questions: {test.questions.length}</p>
                                <p className="card-text">Duration: {test.totalMinutes} minutes</p>
                                <p className="card-text">Toatal Marks: {test.totalMarks} minutes</p> 
                                <div className='d-flex justify-content-between mx-3'>
                                    <button className='btn btn-primary ' id={test._id} name={test.testName} onClick={handleRestoreDeleteTests}> restore</button>
                                    <button className='btn btn-primary '  id={test._id} name={test.testName} onClick={handleDeleteTest}>delete</button>
                                </div>                             
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bin