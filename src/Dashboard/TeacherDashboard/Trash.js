import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  DeleteTestDataPermanently, RestoreDeletedData, fetchTeacherCreatedTestsinBin } from '../../actions/testActions';



function Bin() {

    const trachertestData = useSelector(state => state.tests.teacherCreatedTestInBin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTeacherCreatedTestsinBin())
    }, [dispatch]);


    const handleRestoreDeleteTests=(event)=>{
        const dispatchedData={
            testId:event.target.id
        }
        dispatch(RestoreDeletedData(dispatchedData));
        console.log(event.target.id)
    }
    const handleDeleteTest=(event)=>{
        const dispatchedData={
            testId:event.target.id
        }
        dispatch(DeleteTestDataPermanently(dispatchedData));
    }

        return (
        <div>
            <h1>All Created Test</h1>
            <div className="row">
                {console.log(trachertestData)}
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
                                    <button className='btn btn-primary ' id={test._id} onClick={handleRestoreDeleteTests}> restore</button>
                                    <button className='btn btn-primary ' onClick={handleDeleteTest}>delete</button>
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