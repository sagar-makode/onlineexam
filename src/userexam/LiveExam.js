import React, { useEffect, useState } from 'react';
import img from "./icon.jpg"
import "./LiveExam.css"


const questions = [
    {
        id: 1,
        text: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        answer: null
    },
    {
        id: 2,
        text: 'Who wrote "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
        answer: null
    },
    {
        id: 3,
        text: 'What is the largest mammal on Earth?',
        options: ['Blue Whale', 'Elephant', 'Giraffe', 'Gorilla'],
        answer: null
    },
    {
        id: 4,
        text: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        answer: null
    },
    {
        id: 5,
        text: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'],
        answer: null
    },
    {
        id: 6,
        text: 'In which year did World War II end?',
        options: ['1945', '1939', '1941', '1950'],
        answer: null
    },
    {
        id: 7,
        text: 'What is the capital of Japan?',
        options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
        answer: null
    },
    {
        id: 8,
        text: 'Who is known as the "Father of Computer Science"?',
        options: ['Alan Turing', 'Charles Babbage', 'Ada Lovelace', 'Bill Gates'],
        answer: null
    },
    {
        id: 9,
        text: 'What is the speed of light?',
        options: ['299,792 kilometers per second', '150,000 miles per second', '450,000 meters per second', '600,000 kilometers per second'],
        answer: null
    },
    {
        id: 10,
        text: 'What is the largest ocean on Earth?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: null
    },
    {
        id: 11,
        text: 'What is the meaning of life, the universe, and everything, according to Douglas Adams\' "The Hitchhiker\'s Guide to the Galaxy"?',
        options: ['42', '24', '12', '36'],
        answer: null
    },
    {
        id: 12,
        text: 'In quantum mechanics, what is the Heisenberg Uncertainty Principle?',
        options: ['It states that the position and momentum of a particle cannot both be precisely determined at the same time.', 'It describes the uncertainty in predicting the energy of a particle.', 'It defines the relationship between mass and energy.', 'It explains the behavior of particles in a magnetic field.'],
        answer: null
    },
    {
        id: 13,
        text: 'What is the difference between classical physics and quantum physics?',
        options: ['Classical physics describes the macroscopic world, while quantum physics deals with the behavior of particles at the microscopic level.', 'There is no difference; they are interchangeable terms.', 'Classical physics only applies to inanimate objects, while quantum physics is concerned with living organisms.', 'Quantum physics is an outdated term for classical physics.'],
        answer: null
    },
    {
        id: 14,
        text: 'Who is credited with the discovery of penicillin?',
        options: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Robert Koch'],
        answer: null
    },
    {
        id: 15,
        text: 'What is the role of mitochondria in a cell?',
        options: ['Mitochondria are the powerhouse of the cell, responsible for generating energy.', 'Mitochondria store genetic information in the form of DNA.', 'Mitochondria regulate cell division.', 'Mitochondria are involved in protein synthesis.'],
        answer: null
    },
    {
        id: 16,
        text: 'Explain the theory of relativity proposed by Albert Einstein.',
        options: ['The theory of relativity describes the relationship between space and time, suggesting that they are intertwined dimensions.', 'It states that all motion is relative, and the laws of physics are the same for all observers in uniform motion.', 'The theory of relativity is a mathematical concept with no practical applications.', 'It proposes that energy and mass are interchangeable, as expressed by the famous equation E=mc^2.'],
        answer: null
    },
    {
        id: 17,
        text: 'What is the concept of natural selection in the theory of evolution?',
        options: ['Natural selection is the process by which organisms with favorable traits are more likely to survive and reproduce.', 'It refers to the intentional breeding of organisms with specific traits.', 'Natural selection is a random process with no impact on the survival of species.', 'It involves the artificial manipulation of genes to create desired characteristics.'],
        answer: null
    },
    {
        id: 18,
        text: 'How do clouds form in the Earth\'s atmosphere?',
        options: ['Clouds form when water vapor in the air condenses into tiny water droplets or ice crystals.', 'Clouds are formed by the combustion of fossil fuels.', 'Clouds are generated by volcanic activity.', 'Clouds are a result of magnetic interactions in the atmosphere.'],
        answer: null
    },
    {
        id: 19,
        text: 'What is the main function of the cerebellum in the human brain?',
        options: ['The cerebellum is responsible for coordinating voluntary muscle movements and maintaining balance.', 'It controls emotions and social behavior.', 'The cerebellum regulates basic life functions such as breathing and heart rate.', 'It is the center for memory and learning.'],
        answer: null
    },
    {
        id: 20,
        text: 'Explain the concept of black holes in astrophysics.',
        options: ['Black holes are regions of spacetime with extremely strong gravitational forces that nothing, not even light, can escape from.', 'Black holes emit intense radiation and heat.', 'They are hypothetical objects with no scientific basis.', 'Black holes are massive stars with a black outer surface.'],
        answer: null
    },
    // Add more questions as needed
];


const LiveExam = () => {

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [time, setTime] = useState({ minutes:10 , seconds: 0 }); // Initial time (30 minutes)




    useEffect(() => {
        const timer = setInterval(() => {
            if (time.minutes === 0 && time.seconds === 0) {
                // Time is up, you can add logic for handling the end of the exam
                clearInterval(timer);
            } else {
                setTime(prevTime => {
                    if (prevTime.seconds === 0) {
                        return { minutes: prevTime.minutes - 1, seconds: 59 };
                    } else {
                        return { ...prevTime, seconds: prevTime.seconds - 1 };
                    }
                });
            }
        }, 1000);

        // Cleanup the timer on component unmount
        return () => clearInterval(timer);
    }, [time]);

    const formatTime = (value) => (value < 10 ? `0${value}` : value);











    const handleNext = () => {
        // Implement logic to go to the next question
        const currentIndex = questions.findIndex(q => q.id === currentQuestion.id);
        const nextIndex = (currentIndex + 1) % questions.length;
        setCurrentQuestion(questions[nextIndex]);
    };

    const handlePrevious = () => {
        // Implement logic to go to the previous question
        const currentIndex = questions.findIndex(q => q.id === currentQuestion.id);
        const previousIndex = (currentIndex - 1 + questions.length) % questions.length;
        setCurrentQuestion(questions[previousIndex]);
    };

    const handleSave = () => {
        // Implement logic to save the current state or answer
        console.log('Saved:', currentQuestion);
        const updatedUserAnswers = [...userAnswers];
        const currentQuestionIndex = questions.findIndex(q => q.id === currentQuestion.id);
        updatedUserAnswers[currentQuestionIndex] = currentQuestion.answer == null ? userAnswers[currentQuestionIndex] : currentQuestion.answer;
        setUserAnswers(updatedUserAnswers);


    };
    const handleMarkAsReview = () => {
        // Implement logic to mark the current question as a review
        console.log('Marked as Review:', currentQuestion);
    };

    const handleClearResponse = () => {
        const currentQuestionIndex = questions.findIndex(q => q.id === currentQuestion.id);

        setUserAnswers(prevUserAnswers => {
            const updatedUserAnswers = [...prevUserAnswers];
            updatedUserAnswers[currentQuestionIndex] = null;
            return updatedUserAnswers;
        });

        setCurrentQuestion(prevQuestion => ({
            ...prevQuestion,
            answer: null
        }));

    };

    const handleOptionChange = (option) => {
        setCurrentQuestion(prevQuestion => ({
            ...prevQuestion,
            answer: option,
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
                            Time Left: {formatTime(time.minutes)}:{formatTime(time.seconds)}
                        </div>
                    </div>

                </div>
            </nav>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-9">

                        <h3>Question {currentQuestion.id}</h3>
                        <p>{currentQuestion.text}</p>
                        <form>
                            <ul>
                                {currentQuestion.options.map((option, index) => (
                                    <li key={index}>
                                        <label>
                                            <input
                                                type="radio"
                                                className='m-2'
                                                name={`question-${currentQuestion.id}`}
                                                value={option}

                                                onChange={() => handleOptionChange(option)}
                                                checked={
                                                    currentQuestion.answer !== null
                                                        ? currentQuestion.answer === option
                                                        : userAnswers[currentQuestion.id - 1] === option
                                                }
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
                                <button className="btn btn-danger " onClick={handleMarkAsReview}>Submit Test</button>
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
                                    key={question.id}
                                    className={`btn btn-outline-primary mb-2 question-button ${question.answer !== null || userAnswers[question.id - 1] !== null
                                            ? 'answered'
                                            : ''
                                        } ${question.id === currentQuestion.id ? 'active' : ''}`}
                                    onClick={() => setCurrentQuestion({
                                        ...question,
                                        answer: userAnswers[question.id - 1],  // Set answer from userAnswers array
                                    })}
                                >
                                    {question.id}
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
