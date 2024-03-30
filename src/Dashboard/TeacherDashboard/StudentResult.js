import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherCreatedTests } from '../../actions/testActions';

function StudentResult() {


  const studenttresultforteacher = useSelector(state => state.tests.teacherCreatedTest);


  const dispatch = useDispatch();

    useEffect(() => {
     
        dispatch(fetchTeacherCreatedTests())
       
      }, [dispatch]);

  return (
    <div> <div style={{ marginTop: "10px" }} >
      <h1>Student Results</h1>




      <table className="table table-striped" style={{ textAlign: "center" }}>
        <thead style={{ fontSize: "20px" }}>
          <tr>
            <th style={{ color: "white" }} className='bg-primary' scope="col">#</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Test Name</th>

            <th style={{ color: "white" }} className='bg-primary' scope="col">Student Name</th>

            <th style={{ color: "white" }} className='bg-primary' scope="col">Correct Answers</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Total Questions</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Obtained Marks</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Total Marks</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Status</th>

          </tr>
        </thead>
        <tbody style={{ fontSize: "18px" }}>
          {studenttresultforteacher.map((result, index) => (
            // Check if submitedBy is not null and not empty
            result.submitedBy && result.submitedBy.length > 0 && (
              <React.Fragment key={index}>
                {result.submitedBy.map((submittedItem, subIndex) => (
                  <tr key={subIndex}>
                    <th scope="row">{subIndex + 1}</th>
                    <td>{submittedItem.testName}</td>
                    <td>{submittedItem.name}</td>
                    <td>{submittedItem.correctAnswers}</td>
                    <td>{submittedItem.totalQuestions}</td>

                    <td>{submittedItem.obtainedMarks}</td>
                    <td>{submittedItem.totalMarks}</td>
                    <td>{submittedItem.passStatus}</td>
                  </tr>
                ))}
             </React.Fragment>
            )
          ))}
        </tbody>
      </table></div></div>
  )
}

export default StudentResult