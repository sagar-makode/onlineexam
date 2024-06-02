import React, { useEffect, useState } from 'react'

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










function HomeFormCard() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTests());
        dispatch(fetchAllCretaterforHomePage());
    }, [dispatch]);
    const [showAll, setShowAll] = useState(false);
    const [showAllCreators, setShowAllCreators] = useState(false);

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
    const visibleTests = showAll ? testsData : testsData.slice(0, 4);
    const visibleCreators = showAllCreators ? allCreterData : allCreterData.slice(0, 10);


    return (
        <>

            <div className="container mt-4 home-card">
                <div className="row">
                    {visibleTests.map((tests, index) => {
                        const creator = allCreterData.find(creator => creator.name === tests.teacherName);
                        console.log(creator);
                        const creatorImage = creator ? creator.imagepath : profileimag;
                        const categoryImage = getCategoryImage(tests.category);
                        return (
                            <div key={index} className="col-md-6 col-sm-6 col-lg-3 card-custom">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="mr-2">
                                                <img src={creatorImage} className="avatar-img" alt="Avatar" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">{tests.teacherName}</h6>
                                                <small className="text-muted">Subscribers : {creator?.subscribers.length}</small>
                                            </div>
                                        </div>
                                        <img src={categoryImage} className="card-img-top mt-3" alt="HTML Tutorial" />
                                        <h5 className="card-title mt-3">Test Name : {tests.testName}</h5>
                                        <p className="card-text mb-1"><small className="text-muted">Total Duration : {tests.totalMinutes} Minutes</small></p>
                                        <p className="card-text mb-3"><small className="text-muted">Category : {tests.category}</small></p>

                                        <button className='btn btn-primary'>Start Test</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {!showAll && <div className="text-center p-3"><button className="btn btn-primary" onClick={() => setShowAll(true)}>Show All</button></div>}


                <div className='p-3'>
                    <h1>ALL Creator List</h1>
                    <div>
                        {visibleCreators.map((creater, index) => (
                            <div key={index} style={{ display: 'inline-block', margin: '10px 10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img src={creater.imagepath ? creater.imagepath : profileimag} alt="Creator" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
                                    <div>{creater.name}</div>
                                    <div>Subscribers: {creater.subscribers.length}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!showAllCreators && <div className="text-center p-3"><button className="btn btn-primary" onClick={() => setShowAllCreators(true)}>Show All Creators</button></div>}

                </div>
            </div>
        </>
    )
}

export default HomeFormCard