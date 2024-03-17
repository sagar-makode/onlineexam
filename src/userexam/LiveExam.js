import React, { useEffect, useState } from 'react';
import img from "./icon.jpg"
import "./LiveExam.css"
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';


const LiveExam = () => {
    const location = useLocation();
    const test = location.state.test;
    console.log(test);

    const questions = test.questions

    // console.log(location);
 
    
    const quest = useSelector((state) => state.tests.currentselectedTest);
    
    // console.log(examData , "this is data");
    // console.log(questions , "this data");

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    // console.log(currentQuestion);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    // const [Answers, setAnswers] = useState(Array(questions.length).fill(null));

    // console.log(userAnswers);
   
    


    const [remainingTime, setRemainingTime] = useState(0); // Remaining time in seconds

    // Receive exam duration from backend (in minutes)
    // console.log(questions);
    const examDurationInMinutes = questions.totalMinutes; // Example duration, replace it with your backend value
    const examDurationInSeconds = examDurationInMinutes * 60;
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + examDurationInSeconds);

    // Calculate remaining time and update every second
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = Math.floor((endTime - now) / 1000); // Difference in seconds
            setRemainingTime(difference > 0 ? difference : 0);
        }, 1000);
        
        // Cleanup function
        return () => clearInterval(timer);
    }, []);

    // Format remaining time for display
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };




    const handleNext = () => {
        // Implement logic to go to the next question
        const currentIndex = questions.findIndex(q => q.questionNumber === currentQuestion.questionNumber);
        const nextIndex = (currentIndex + 1) % questions.length;

        if (nextIndex === 0) {
            // Reached the end of questions
            // Handle end of questions behavior here
            console.log("End of questions reached");
        } else {
            // setCurrentQuestion(questions[nextIndex]);
            setCurrentQuestion({
                ...questions[nextIndex],
                answer: userAnswers[questions[nextIndex].questionNumber - 1]
            });
        }
    };

    const handlePrevious = () => {
        // Implement logic to go to the previous question
        const currentIndex = questions.findIndex(q => q.questionNumber === currentQuestion.questionNumber);
        const previousIndex = (currentIndex - 1 + questions.length) % questions.length;
        setCurrentQuestion({
            ...questions[previousIndex],
            answer: userAnswers[questions[previousIndex].questionNumber - 1]
        });
    
    };

    const handleSave = () => {
        // Implement logic to save the current state or answer
        // console.log('Saved:', currentQuestion);
        const updatedUserAnswers = [...userAnswers];
        const currentQuestionIndex = questions.findIndex(q => q.questionNumber === currentQuestion.questionNumber);
        console.log(currentQuestionIndex, "question Index");
        updatedUserAnswers[currentQuestionIndex] = currentQuestion.answer == null ? userAnswers[currentQuestionIndex] : currentQuestion.answer;
        setUserAnswers(updatedUserAnswers);

        
      


    };
    const navigate = useNavigate()
    const handleSubmitTest= () => {
        navigate('/result', { state: { userAnswers, test } });
    };

    const handleClearResponse = () => {
        const currentQuestionIndex = questions.findIndex(q => q.questionNumber === currentQuestion.questionNumber);

        setUserAnswers(prevUserAnswers => {
            const updatedUserAnswers = [...prevUserAnswers];
            updatedUserAnswers[currentQuestionIndex] = null;
            return updatedUserAnswers;
        });

        setCurrentQuestion(prevQuestion => ({
            ...prevQuestion,
            answer:null
           
        }));

    };

    const handleOptionChange = (index) => {
        setCurrentQuestion(prevQuestion => ({
            ...prevQuestion,
            answer: index,
            answered: true  // Mark the question as answered
        }));
    };

    const handelSaveAndNext = () => {

        handleSave();
        handleNext();
    }



    const attemptedQuestions = () => questions.filter((question, index) => userAnswers[index] !== null);
    const remainingQuestions = () => questions.filter((question, index) => userAnswers[index] === null);








    return (
        <div className='container-fluid'>
            <nav className="navbar bg-primary  mt-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="navbar-brand">Staff Selection Commission</div>
                    <div className="d-flex justify-content-end">
                        <div className="navbar-brand">
                        Time Left: {formatTime(remainingTime)}

                        </div>
                    </div>
                  
                </div>
            </nav>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-9">

                        <h3>Question {currentQuestion.questionNumber}</h3>
                        <p>{currentQuestion.questionText}</p>
                        <form>
                            <ul>
                                {currentQuestion.options.map((option, index) => (

                                <li key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            className='m-2'
                                            name={`question-${currentQuestion.questionNumber}`}
                                            value={option}

                                            onChange={() => handleOptionChange(index)}
                                            checked={currentQuestion.answer === index}
                                        />

                                        {option}
                                    </label>
                                </li>
                                ))}
                            </ul>
                        </form>
                        <div className='d-flex justify-content-between navigation-buttons'>
                            {/* Buttons at the right end of the page */}
                            <div className="d-flex justify-content-start">
                                <button className="btn btn-danger " onClick={handleSubmitTest}>Submit Test</button>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-warning mx-2" onClick={handleClearResponse}>Clear Response</button>
                                <button className="btn btn-primary" onClick={handlePrevious}>Previous</button>
                                <button className="btn btn-success mx-2" onClick={handelSaveAndNext}>Save & Next</button>
                                {/* <button className="btn btn-primary" onClick={handleNext}  >Next</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">

                        <div className="d-flex align-items-center">
                            <img src={img} alt="User Profile" className="img-fluid rounded-circle" style={{ maxWidth: '100px' }} />
                            <div style={{ marginLeft: "10px" }}>
                                <h3>Sagar Makode</h3>
                                {/* Add user name dynamically here */}
                            </div>
                        </div>
                        {/* <h2>Sagar Makode</h2> */}
                        <p className='mt-3'>You are viewing general awareness session</p>

                        <button className='btn btn-success m-3'>Answered {attemptedQuestions().length}</button>
                        <button className='btn btn-warning'>Pending {remainingQuestions().length}</button>


                        <div className="question-palette">
                            <h5>Questions</h5>
                            {questions.map((question) => (
                                // <button
                                //     key={question.id}
                                //     className={`btn btn-outline-primary mb-2 question-button ${question.answered ? 'answered' : ''} ${question.id === currentQuestion.id ? 'active' : ''}`}
                                //     onClick={() => setCurrentQuestion(question)}
                                // >

                                <button
                                    key={question.questionNumber}
                                    className={`btn btn-outline-primary mb-2 question-button ${userAnswers[question.questionNumber - 1] !== null
                                        ? 'answered'
                                        : ''
                                        } ${question.questionNumber === currentQuestion.questionNumber ? 'active' : ''}`}
                                    onClick={() => setCurrentQuestion({
                                        ...question,
                                        answer: userAnswers[question.questionNumber - 1],  // Set answer from userAnswers array
                                    })}
                                >
                                    {question.questionNumber}
                                </button>
                            ))}
                        </div>




                    </div>

                </div>
            </div>

            
        </div>



    );
};

export default LiveExam;
