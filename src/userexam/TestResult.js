import React from 'react'

import { useLocation } from 'react-router-dom';
function TestResult() {

  const location = useLocation();

  const { data } = location.state;
 

  
  return (
    <div className="container text-center">
    <h1>Test Result</h1>
    <p>Total Questions: {data.totalQuestions}</p>
    <p>Correct Answers: {data.correctAnswers}</p>
    <p>Total Marks: {data.totalMarks}</p>
    <p>Obtained Marks: {data.obtainedMark}</p>
    <p>Status: {data.passStatus}</p>
    {/* You can add more details or display the result in a different format */}
  </div>
  )
}

export default TestResult