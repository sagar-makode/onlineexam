import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

function AllTestRecords() {
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTests());
    }, [dispatch]);

    
    const testsData = useSelector(state => state.tests.tests);
    const allCreterData = useSelector(state => state.landingpagedata.allCreterData);
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

    return (
        <div className="container mt-4">
            <div className="row">
                {testsData.map((tests, index) => {
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
                                    <button className='btn btn-primary card-text-button mt-1'>Start Test</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AllTestRecords