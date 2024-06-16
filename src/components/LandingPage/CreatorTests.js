import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Quantitative_Aptitude from "../assets/all_card_image/Quantitative Aptitude.jpg"
import History from "../assets/all_card_image/History.jpg"
import Logical_reasoning from "../assets/all_card_image/Logical reasoning.jpg"
import Computer from "../assets/all_card_image/Computer.jpg"
import Economics from "../assets/all_card_image/Economics.jpg"
import Geography from "../assets/all_card_image/Economics.jpg"
import Mathematics from "../assets/all_card_image/Mathematics.jpg"
import Current_affairs from "../assets/all_card_image/Current affairs.jpg"
import General_knowledge from "../assets/all_card_image/General knowledge.jpg"
import other from "../assets/all_card_image/others.jpg";
import profileimag from "../assets/profile image.png";
import { fetchTests } from '../actions/testActions';
import { fetchAllCretaterforHomePage } from '../actions/landingPageActions';

function CreatorTests() {
    const { creatorId } = useParams();
    const testsData = useSelector(state => state.tests.tests);
    const loading = useSelector(state => state.tests.loading);
    const [creatorTests, setCreatorTests] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const allCreterData = useSelector(state => state.landingpagedata.allCreterData);
    const studentProfileData = useSelector(state => state.dashboard.userData);
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTests());
        dispatch(fetchAllCretaterforHomePage());
    }, [dispatch]);
    const getCategoryImage = (category) => {
        switch (category) {
            case 'Quantitative Aptitude':
                return Quantitative_Aptitude;
            case 'History':
                return History;
            case 'Logical reasoning':
                return Logical_reasoning;
            case 'Computer':
                return Computer;
            case 'Economics':
                return Economics;
            case 'Geography':
                return Geography;
            case 'Mathematics':
                return Mathematics;
            case 'Current affairs':
                return Current_affairs;
            case 'General knowledge':
                return General_knowledge;
            default:
                return other;
        }
    };
    const navigate = useNavigate();



    useEffect(() => {
        // Filter tests based on creatorId
        const filteredTests = testsData.filter(test => test.teacherId === creatorId);
        setCreatorTests(filteredTests);
    }, [testsData, creatorId]);




    const handleAttemptTest = async (test) => {
        navigate(`/terms&conditions`, { state: { test, studentProfileData } });
    }

    const filteredcatagoryTests = selectedCategory === 'All' ? creatorTests : creatorTests.filter(test => test.category === selectedCategory);

    return (

        <>
            {loading ? (<div className="d-flex justify-content-center align-items-center text-primary" style={{ height: '30vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>) : (
                
                
                <div className="container mt-4" style={{minHeight:"55vh"}}>
                <h3 className='text-center'>Tests by Creator</h3>
                {creatorTests.length === 0 ? (
                    <p className='text-center'>No tests found for this creator.</p>
                ) : (
                    <div className="container mt-4">
                        <div className="d-flex justify-content-end align-items-center mb-3">
                            <label htmlFor="categoryFilter" className="form-label me-2 mb-0">Category :</label>
                            <select
                                id="categoryFilter"
                                className="form-select"
                                style={{ minWidth: '100px', maxWidth: "15%" }}
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Quantitative Aptitude">Quantitative Aptitude</option>
                                <option value="History">History</option>
                                <option value="Logical reasoning">Logical reasoning</option>
                                <option value="Computer">Computer</option>
                                <option value="Economics">Economics</option>
                                <option value="Geography">Geography</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Current affairs">Current affairs</option>
                                <option value="General knowledge">General knowledge</option>
                            </select>
                        </div>


                        <div className="row">
                            {filteredcatagoryTests.map((tests, index) => {
                                const creator = allCreterData.find(creator => creator.name === tests.teacherName);
                                const creatorImage = creator ? creator.imagepath : profileimag;
                                const categoryImage = getCategoryImage(tests.category);

                                return (
                                    <div key={index} className="col-6 col-md-4 col-lg-3 card-custom">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex align-items-start">
                                                    <div className="mr-2">
                                                        <img src={creatorImage} className="avatar-img" alt="Avatar" />
                                                    </div>
                                                    <div>
                                                        <p className="m-0 card-user-name">{tests.teacherName}</p>
                                                        <p className="m-0 text-muted card-user-subcriber">Subscribers: {creator?.subscribers.length}</p>
                                                    </div>
                                                </div>
                                                <img src={categoryImage} className="card-img-top" alt="HTML Tutorial" />
                                                <div className="card-title">Test Name: {tests.testName}</div>
                                                <p className="card-text"><small className="text-muted">Duration: {tests.totalMinutes} Minutes</small></p>
                                                <p className="card-text"><small className="text-muted">Category: {tests.category}</small></p>
                                                <button className='btn btn-primary card-text-button mt-1' onClick={() => handleAttemptTest(tests)}>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>)}



        </>
    )
}

export default CreatorTests