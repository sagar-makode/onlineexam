import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherCreatedTests } from '../../actions/testActions';

function AllCreatedTest() {

    const trachertestData = useSelector(state => state.tests.teacherCreatedTest);
    const dispatch = useDispatch();

    useEffect(() => {
     
        dispatch(fetchTeacherCreatedTests())
       
      }, [dispatch]);

    return (
        <div>




            <h1>All Created Test</h1>
            <div className="row">


                {trachertestData.map((test, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">

                                <h5 className="card-title">Test Name: {test.testName}</h5>
                                <p className="card-text">Category: {test.category}</p>
                                <p className="card-text">Total Questions: {test.questions.length}</p>
                                <p className="card-text">Duration: {test.totalMinutes} minutes</p>
                                <p className="card-text">Toatal Marks: {test.totalMarks} minutes</p>

                                {/* Add other test information here */}
                                {/* <button className="btn btn-primary" onClick={() => handleAttemptTest(test)}>Attempt Test</button> */}
                            </div>
                        </div>
                    </div>
              ))}
              </div>
        </div>
    )
}

export default AllCreatedTest