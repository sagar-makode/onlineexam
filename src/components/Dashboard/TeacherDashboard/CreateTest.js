import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CreateTestRequst } from '../../actions/dashboardActions';
import InputTranslater from '../../common/InputTranslater';
import { ValidateTestCreateForm } from './ValidateTestCreateForm';
import { clearMessage } from '../../actions/userActions';
import { notification } from 'antd';

function CreateTest() {


    const [testName, setTestName] = useState('');
    const [category, setCategory] = useState('');
    const [minutes, setMinutes] = useState('');
    const [outOfMarks, setOutOfMarks] = useState('');
    const [language, setLanguage] = useState('en'); // Default language
    const [customCategory, setCustomCategory] = useState('');
    const [errors, setErrors] = useState([]);


    const dispatch = useDispatch();

    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctOption: '' }]);


    const teacherProfileData = useSelector(state => state.dashboard.userData);
    const testCreatedSuccess = useSelector(state => state.dashboard.testCreatedSuccess);

    const testCreatedFailure = useSelector(state => state.dashboard.testCreatedFailure);



    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], correctOption: '' }]);

    };
    const openNotification = (message, description, type) => {
        const textColor = type === 'success' ? 'black' : 'red';
        const args = {
            message: <span style={{ color: textColor }}>{message}</span>,
            description: <span style={{ color: textColor }}>{description}</span>,
            duration: 2
        };
        notification.open(args);
    };

    useEffect(() => {
        if (testCreatedSuccess) {
            setTestName('');
            setCategory('');
            setMinutes('');
            setOutOfMarks('');
            setCustomCategory('');
            setQuestions([{ question: '', options: ['', '', '', ''], correctOption: '' }]);
            setErrors([]);
            const message = "Test Created Succesfully"
            const description = "Congratulations, Now you are Created test Succesfully."
            openNotification(message, description, 'success')

            setTimeout(() => {
                dispatch(clearMessage())
            }, 2000);
        }
        if (testCreatedFailure) {
            const message = "Test Not Created"
            const description = "Sorry, Something went wrong."
            openNotification(message, description, 'error')

            setTimeout(() => {
                dispatch(clearMessage())
            }, 2000);
        }
    }, [testCreatedSuccess, testCreatedFailure]);

    const testData = {
        teacherId: teacherProfileData._id, // Assuming teacher ID is stored in teacherProfileData.id
        teacherName: teacherProfileData.name,
        testName: testName,
        totalMinutes: minutes,
        totalMarks: outOfMarks,
        category: category === 'other' ? customCategory : category,
        questions: questions.map((question, index) => ({
            questionNumber: index + 1,
            questionText: question.question,
            options: question.options,
        })),
        correctAnswers: questions.map((question) => question.correctOption - 1), // Assuming correctOption is 1-based index
    };

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = ValidateTestCreateForm(testName, category, customCategory, minutes, outOfMarks, questions);
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }
        dispatch(CreateTestRequst(testData));

    };

    const deleteQuestion = e => {
        const updatedQuestions = questions.filter((_, index) => index !== e);
        setQuestions(updatedQuestions);

    }
    const getError = (field) => {
        const error = errors.find(error => error.field === field);
        return error ? error.message : null;
    };

    const categories = ["History", "Computer", "Economics", "Geography", "Mathematics", "Current affairs", "General knowledge", "Logical reasoning", "Quantitative Aptitude", "other"];


    return (
        <div className="row justify-content-center" >
            <div className="col-lg-10">
                <div className="creat-test-container">
                    <div className="card-body">

                        <form onSubmit={handleSubmit} >


                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <h2 className="flex-grow-1 mb-2 mb-md-0">Create Test</h2>
                                <div className="d-flex mb-2 mb-md-0">
                                    <select
                                        className="form-select me-2 " style={{ width: "auto" }}
                                        onChange={(e) => setLanguage(e.target.value)}
                                    >
                                        <option value="en">English</option>
                                        <option value="hi">Hindi</option>
                                        <option value="mr">Marathi</option>
                                    </select>
                                    <button type="submit" className="btn btn-success" >
                                        Create Test
                                    </button>
                                </div>
                            </div>
                            <div className="mb-3 mt-3">
                                <h6><label htmlFor="testName" className="form-label">Test Name</label> </h6>
                                <InputTranslater
                                    value={testName}
                                    onChangeText={(text) => { setTestName(text) }}
                                    type="text"
                                    className="form-control"
                                    id="testName"
                                    name="testName"
                                    toLanguage={language}
                                />
                                {getError('testName') && <div className="text-danger">{getError('testName')}</div>}


                            </div>


                            <div className="mb-3">
                                <h6><label htmlFor="category" className="form-label">Category</label></h6>
                                <select
                                    className="form-select custom-select"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((cat, index) => (
                                        <option key={index} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                {getError('category') && <div className="text-danger">{getError('category')}</div>}

                                {category === "other" ?


                                    <div className="mt-3 mb-3">
                                        <h6><label htmlFor="minutes" className="form-label">Enter Your Category</label></h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={customCategory}
                                            onChange={(e) => setCustomCategory(e.target.value)}
                                        />
                                    </div>
                                    : ""}
                                {getError('customCategory') && <div className="text-danger">{getError('customCategory')}</div>}


                            </div>
                            <div className="mb-3">
                                <h6><label htmlFor="minutes" className="form-label">Duration (in Minutes)</label></h6>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="minutes"
                                    name="minutes"
                                    value={minutes}
                                    onChange={(e) => setMinutes(e.target.value)}


                                />
                                {getError('minutes') && <div className="text-danger">{getError('minutes')}</div>}

                            </div>

                            <div className="mb-3">
                                <h6><label htmlFor="outOfMarks" className="form-label">Total Marks</label></h6>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="outOfMarks"
                                    name="outOfMarks"
                                    value={outOfMarks}
                                    onChange={(e) => setOutOfMarks(e.target.value)}
                                />
                                {getError('outOfMarks') && <div className="text-danger">{getError('outOfMarks')}</div>}

                            </div>

                            {questions.map((question, index) => (
                                <div key={index}>
                                    <div className="mb-3">
                                        <h6><label htmlFor={`question${index}`} className="form-label">Question {index + 1}</label></h6>
                                        <div className='input-container'>

                                            <InputTranslater
                                                type="text"
                                                className="form-control"
                                                id={`question${index}`}
                                                name={`question${index}`}
                                                value={question.question}
                                                onChangeText={(text) => {
                                                    const updatedQuestions = [...questions];
                                                    updatedQuestions[index].question = text;
                                                    setQuestions(updatedQuestions);
                                                }}
                                                toLanguage={language}
                                            />


                                            {questions.length > 1 && (
                                                <button
                                                    style={{ border: "gray", background: "white" }}
                                                    type="button"
                                                    onClick={() => deleteQuestion(index)}
                                                >
                                                    <span className="material-symbols-outlined text-danger" style={{ fontSize: "35px" }}>
                                                        delete
                                                    </span>
                                                </button>
                                            )}
                                            {getError(`question${index}`) && <div className="text-danger">{getError(`question${index}`)}</div>}

                                        </div>

                                    </div>
                                    <div className="row">
                                        {question.options.map((option, optionIndex) => (
                                            <div className="col-md-3" key={optionIndex}>
                                                <InputTranslater
                                                    type="text"
                                                    className="form-control mb-3"
                                                    placeholder={`Option ${optionIndex + 1}`}

                                                    value={option}
                                                    onChangeText={(text) => {
                                                        const updatedQuestions = [...questions];
                                                        updatedQuestions[index].options[optionIndex] = text;
                                                        setQuestions(updatedQuestions);

                                                    }}
                                                    toLanguage={language}
                                                />
                                                {getError(`option${index}-${optionIndex}`) && <div className="text-danger">{getError(`option${index}-${optionIndex}`)}</div>}


                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-3">
                                        <h6><label htmlFor={`correctOption${index}`} className="form-label">Correct Option</label></h6>
                                        <select
                                            className="form-select custom-select"
                                            id={`correctOption${index}`}
                                            name={`correctOption${index}`}
                                            value={question.correctOption || ""}
                                            onChange={(e) => {
                                                const updatedQuestions = [...questions];
                                                updatedQuestions[index].correctOption = parseInt(e.target.value) || "";
                                                setQuestions(updatedQuestions);
                                            }}
                                        >
                                            <option value="" disabled>Select Correct Option</option>
                                            <option value={1}>Option 1</option>
                                            <option value={2}>Option 2</option>
                                            <option value={3}>Option 3</option>
                                            <option value={4}>Option 4</option>
                                        </select>
                                        {getError(`correctOption${index}`) && <div className="text-danger">{getError(`correctOption${index}`)}</div>}

                                    </div>


                                </div>
                            ))}

                            <button type="button" className="btn btn-primary mt-2" onClick={handleAddQuestion}>Add Question</button> &nbsp;


                            <button type="submit" className="btn btn-success mt-2" >
                                Create Test

                            </button>
                        </form>





                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTest