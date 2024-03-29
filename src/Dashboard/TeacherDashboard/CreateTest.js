import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CreateTestRequst } from '../../actions/dashboardActions';

function CreateTest() {




    const [testName, setTestName] = useState('');
    const [category, setCategory] = useState('');
    const [minutes, setMinutes] = useState('');
    const [outOfMarks, setOutOfMarks] = useState('');
    const dispatch = useDispatch();



    
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctOption: '' }]);
 
  
  const teacherProfileData = useSelector(state => state.dashboard.userData);


  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctOption: 1 }]);

  };

  const testData = {
    teacherId: teacherProfileData._id, // Assuming teacher ID is stored in teacherProfileData.id
    testName : testName,
    totalMinutes : minutes,
    totalMarks : outOfMarks,
    category : category,
    questions: questions.map((question,index) => ({
      questionNumber: index + 1,
      questionText: question.question,
      options: question.options,
    })),
    correctAnswers: questions.map((question) => question.correctOption - 1), // Assuming correctOption is 1-based index
  };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(CreateTestRequst(testData));
      };

      

    return (
        <div>
            <div>
                <h2>Create Test</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="testName" className="form-label">Test Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="testName"
                            name="testName"
                            value={testName}
                            onChange={(e) => setTestName(e.target.value)}


                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}

                        />
                    </div>





                    <div className="mb-3">
                        <label htmlFor="minutes" className="form-label">Duration (in Minutes)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="minutes"
                            name="minutes"
                            value={minutes}
                            onChange={(e) => setMinutes(e.target.value)}


                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="outOfMarks" className="form-label">Total Marks</label>
                        <input
                            type="number"
                            className="form-control"
                            id="outOfMarks"
                            name="outOfMarks"
                            value={outOfMarks}
                            onChange={(e) => setOutOfMarks(e.target.value)}

                        />
                    </div>

                    {questions.map((question, index) => (
                        <div key={index}>
                            <div className="mb-3">
                                <label htmlFor={`question${index}`} className="form-label">Question {index + 1}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`question${index}`}
                                    name={`question${index}`}
                                    value={question.question}
                                    onChange={(e) => {
                                        const updatedQuestions = [...questions];
                                        updatedQuestions[index].question = e.target.value;
                                        setQuestions(updatedQuestions);
                                    }}

                                />
                            </div>
                            <div className="row">
                                {question.options.map((option, optionIndex) => (
                                    <div className="col-md-3" key={optionIndex}>
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            placeholder={`Option ${optionIndex + 1}`}
                                            value={option}
                                            onChange={(e) => {
                                                const updatedQuestions = [...questions];
                                                updatedQuestions[index].options[optionIndex] = e.target.value;
                                                setQuestions(updatedQuestions);

                                            }}


                                        />

                                    </div>
                                ))}
                            </div>
                            <div className="mb-3">
                                <label htmlFor={`correctOption${index}`} className="form-label">Correct Option</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id={`correctOption${index}`}
                                    name={`correctOption${index}`}
                                    min={1}
                                    max={4}
                                    value={question.correctOption}
                                    onChange={(e) => {
                                        const updatedQuestions = [...questions];
                                        updatedQuestions[index].correctOption = parseInt(e.target.value);
                                        setQuestions(updatedQuestions);
                                    }}

                                />
                            </div>
                        </div>
                    ))}
                    <div>

                        <button type="button" className="btn btn-primary mb-3" onClick={handleAddQuestion}>Add Question</button>
                    </div>


                    <button type="submit" className="btn btn-primary" >
                        Create Test

                    </button>
                </form>
            </div></div>
    )
}

export default CreateTest