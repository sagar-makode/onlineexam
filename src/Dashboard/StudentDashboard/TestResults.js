import React from 'react'
import { useSelector } from 'react-redux';

function TestResults() {


  const studenttestresult = useSelector(state => state.tests.studenttestresult);
  console.log(studenttestresult);

  return (
    <div style={{ marginTop: "10px" }} >
      <h1>Results</h1>




      <table className="table table-striped" style={{ textAlign: "center" }}>
        <thead style={{ fontSize: "20px" }}>
          <tr>
            <th style={{ color: "white" }} className='bg-primary' scope="col">#</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Test Name</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Correct Answers</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Total Questions</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Obtained Marks</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Total Marks</th>
            <th style={{ color: "white" }} className='bg-primary' scope="col">Status</th>

          </tr>
        </thead>
        <tbody style={{ fontSize: "18px" }}>
        {studenttestresult.map((result, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{result.testName}</td>
              <td>{result.correctAnswers}</td>
              <td>{result.totalQuestions}</td>
              <td>{result.obtainedMarks}</td>
              <td>{result.totalMarks}</td>
              <td>{result.passStatus}</td>
            </tr>
          ))}
        </tbody>
      </table></div>
  )
}

export default TestResults