import React, { useState } from 'react';
import axios from 'axios';
import Questionform from './Questionform';
import Overview from './Overview';

export default function ExamCreation() {
  const [examDataArray, setExamDataArray] = useState([]);
  const [count, setcount] = useState(0);
  const [showOverview, setOverview] = useState(false)

  const handleQuestionFormSubmit = (formData) => {
    setExamDataArray((prevArray) => [...prevArray, formData]);
    setcount((precount) => precount + 1)
  }

  //Used for posting the exam in the backend.
  const handleExamPost = () => {
   
    axios.post('http://localhost:2000/exam', examDataArray)
      .then(function (response) {
    
      })
      .catch(function (error) {
      
      });
  }

  //Using this for rendering question One by One
  const renterQuestions = () => {
    if (count <= 3) {
      return <Questionform key={count} onFormSubmit={handleQuestionFormSubmit} changeIndex={count} />
    }
    else {
      return <p> All Forms submitted</p>
    }
  }

  return (
    <div>
      <h2 className='text-center'>Create New Exam</h2>
      {!showOverview && renterQuestions()}
      {count === 3 ? (
        <div>
          <div style={{marginTop:'10px', justifyContent:"center",display:"flex"}}>
          <button className='mx-1' onClick={handleExamPost}>Post The Exam</button>
          <button className="mx-1" onClick={() => setOverview(true)}> show overview</button>
          </div>

          
          {showOverview && examDataArray.map(item => (
            <Overview key={item.question} QuestionDetails={item} />
          )
          )
          }
        </div>
      ) : (
        <div className=" text-bold" style={{ display: 'flex', justifyContent: "center" }} > Add  questions</div>
      )
      }
    </div>
  )
}

