import React from 'react'
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function TestResult() {

  const location = useLocation();

  const { userAnswers, test } = location.state;
  // const answers = location.state.userAnswers;

  // console.log(userAnswers);
  console.log(test);




  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      // console.log(answer);
     
      if (answer === test.correctAnswers[index]) {
        score += 1;
      }
    });
    return score;
  };

  // console.log(calculateScore);


  const totalQuestions = test.questions.length;
  const correctAnswers = calculateScore();
  const totalMarks = test.totalMarks;
  const obtainedMarks = (correctAnswers / totalQuestions) * totalMarks;
  
  // console.log(totalQuestions);
  // console.log(obtainedMarks);

  const percentageObtained = (obtainedMarks / totalMarks) * 100;
  

  // Determine pass or fail status
  const passPercentage = 60; // 60% passing threshold
  const passStatus = percentageObtained >= passPercentage ? 'Pass' : 'Fail';
 
  
  return (
    <div className="container text-center">
    <h1>Test Result</h1>
    <p>Total Questions: {totalQuestions}</p>
    <p>Correct Answers: {correctAnswers}</p>
    <p>Total Marks: {totalMarks}</p>
    <p>Obtained Marks: {obtainedMarks}</p>
    <p>Status: {passStatus}</p>
    {/* You can add more details or display the result in a different format */}
  </div>
  )
}

export default TestResult