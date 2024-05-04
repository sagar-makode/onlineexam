import React from 'react'
import { useSelector } from 'react-redux';

function TestResult() {

  const finalresult = useSelector(state => state.tests.finalresult);
  return (
    <div className="container text-center">
    <h1>Test Result</h1>
    <p>Total Questions: {finalresult.totalQuestions}</p>
    <p>Correct Answers: {finalresult.correctAnswers}</p>
    <p>Total Marks: {finalresult.totalMarks}</p>
    <p>Obtained Marks: {finalresult.obtainedMarks}</p>
    
    <p>Percentage: {finalresult.percentageObtained}</p>
    <p>Status: {finalresult.passStatus}</p>
  </div>
  )
}

export default TestResult