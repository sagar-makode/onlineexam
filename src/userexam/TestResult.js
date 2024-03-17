import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function TestResult() {
  const testsData = useSelector(state => state.tests.tests);
  console.log(testsData);

  const location = useLocation();

  const answers = location.state.userAnswers;
  console.log(answers);
  return (
    <div>TestResult</div>
  )
}

export default TestResult