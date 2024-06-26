import React, { useEffect } from 'react'

import "./HomeFormCard.css"
import other from "../assets/all_card_image/others.jpg";
import profileimag from "../assets/profile image.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTests } from '../actions/testActions';
import { fetchAllCretaterforHomePage } from '../actions/landingPageActions';
import Quantitative_Aptitude from "../assets/all_card_image/Quantitative Aptitude.jpg"
import History from "../assets/all_card_image/History.jpg"
import Logical_reasoning from "../assets/all_card_image/Logical reasoning.jpg"
import Computer from "../assets/all_card_image/Computer.jpg"
import Economics from "../assets/all_card_image/Economics.jpg"
import Geography from "../assets/all_card_image/Economics.jpg"
import Mathematics from "../assets/all_card_image/Mathematics.jpg"
import Current_affairs from "../assets/all_card_image/Current affairs.jpg"
import General_knowledge from "../assets/all_card_image/General knowledge.jpg"
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';










function HomeFormCard() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTests());
        dispatch(fetchAllCretaterforHomePage());
    }, [dispatch]);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const studentProfileData = useSelector(state => state.dashboard.userData);
    const handleAttemptTest = async (test) => {
        navigate(`/terms&conditions`, { state: { test, studentProfileData } });

    };
    const handleShowCreatorTests = (creatorId) => {
        navigate(`/creator/${creatorId}/tests`);
    };

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

    const testsData = useSelector(state => state.tests.tests);

    const allCreterData = useSelector(state => state.landingpagedata.allCreterData);
    const loading = useSelector(state => state.tests.loading);
    const loadingforhome = useSelector(state => state.landingpagedata.loadingforhome);

    

    const visibleTests =  testsData.slice(0, 4);
    // const visibleCreators = showAllCreators ? allCreterData : allCreterData.slice(0, 10);
    const maxCreatorsToShow = isMobile ? 6 : 8;

    const visibleCreators = allCreterData.slice(0, maxCreatorsToShow);
    const navigate = useNavigate()
    const handelShowallTest = () => {
        navigate('/alltest')
    }
    const handelShowallCreators = () => {
        navigate('/allcreators')
    }
    return (
        <>
            <div className="container mt-4 home-card">
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center text-primary" style={{ height: '30vh' }}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (<div className="row">

                    {visibleTests.map((tests, index) => {
                        const creator = allCreterData.find(creator => creator.name === tests.teacherName);
                        const creatorImage = creator ? creator.imagepath : profileimag;
                        const categoryImage = getCategoryImage(tests.category);
                        return (
                            <div key={index} className="col-6 col-md-4 col-lg-3 card-custom">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-start ">
                                            <div className="mr-2">
                                                <img src={creatorImage} className="avatar-img" alt="Avatar" />
                                            </div>
                                            <div>
                                                <p className="m-0 card-user-name">{tests.teacherName}</p>
                                                <p className="m-0 text-muted card-user-subcriber">Subscribers : {creator?.subscribers.length}</p>
                                            </div>
                                        </div>
                                        <img src={categoryImage} className="card-img-top" alt="HTML Tutorial" />
                                        <div className="card-title">Test Name : {tests.testName}</div>
                                        <p className="card-text"><small className="text-muted">Duration : {tests.totalMinutes} Minutes</small></p>
                                        <p className="card-text"><small className="text-muted">Category : {tests.category}</small></p>

                                        <button className='btn btn-primary card-text-button mt-1'onClick={()=>handleAttemptTest(tests)}>Start Test</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>)}


                <div className="text-center mb-2"><button className="btn btn-primary" onClick={handelShowallTest}>Show All</button></div>


                <div className='creator-list-container'>
                    <h4><span style={{ color: "red" }}>-- </span>ALL Top Creators<span style={{ color: "red" }}> --</span></h4>
                    {loadingforhome ? (
                        <div className="d-flex justify-content-center align-items-center text-primary" style={{ height: '30vh' }}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (<div className="creator-list" >
                        {visibleCreators.map((creater, index) => (
                            <div key={index} className="creator-item" onClick={() => handleShowCreatorTests(creater._id)}>
                                <div className="creator-item-content">
                                    <img src={creater.imagepath ? creater.imagepath : profileimag} alt="Creator" className="creator-item-img" />
                                    <div>{creater.name}</div>
                                    <div className='sub'>Subscribers: {creater.subscribers.length}</div>
                                </div>
                            </div>
                        ))}
                    </div>)}


                  <div className="text-center p-3"><button className="btn btn-primary" onClick={handelShowallCreators}>Show All Creators</button></div>

                </div>
            </div>
        </>
    )
}

export default HomeFormCard