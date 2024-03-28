import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { submitTest } from '../actions/testActions';
import { Spinner } from 'react-bootstrap';

function TestResult() {

  const location = useLocation();


  const testSubmitted = useSelector(state => state.tests.testSubmitted);
  console.log(testSubmitted);

  const { userAnswers, test,studentProfileData } = location.state;
  // const answers = location.state.userAnswers;

  // console.log(userAnswers);
  console.log(studentProfileData);




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
 


  useEffect(() => {
    sendDataToBackend()
   
  }, []);

const dispatch = useDispatch();



  const  sendDataToBackend = ()=>{

    const data =  {
      userAnswers : userAnswers,
      testId : test._id,
      totalQuestions: totalQuestions,
      correctAnswers : correctAnswers,
      totalMarks : totalMarks,
      obtainedMark : obtainedMarks,
      passStatus : passStatus,
      testName : test.testName,
      name : studentProfileData.name,
      submitterId : studentProfileData._id
    }
    dispatch(submitTest(data))

  }



  if (!testSubmitted) {
    // Display Bootstrap spinner while test submission is in progress
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  
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