import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchteacherSubscribers, subscribeToTeacher, unsubscribetoTeacher } from '../../actions/subscribers';
import { Button, Spinner } from 'react-bootstrap';
import AuthContext from '../../Navbar/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

import {Badge } from 'react-bootstrap';
import { FaCircle, FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';

const TermsAndConditions = () => {
    const location = useLocation();

    const { test, studentProfileData } = location.state || {};

    const techernamesubcriber = useSelector(state => state.subcriptiondata.techerData);
    const subcribeSuccess = useSelector(state => state.subcriptiondata.subcribeSuccess);
    const unsubcribeSuccess = useSelector(state => state.subcriptiondata.unsubcribeSuccess);
    const isSubscribed = useSelector(state => state.subcriptiondata.isSubscribed);

    const [loading, setLoading] = useState(false);

    const { isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate()


    const handleStartTest = () => {
        // Trigger the attempt test function from AllTests component
        // onAttemptTest();
        navigate(`/liveexam`, { state: { test, studentProfileData } });
    };


    const handleSubscribe = () => {
        setLoading(true)
        // Dispatch action to subscribe student to teacher
        dispatch(subscribeToTeacher(techernamesubcriber._id));
    };

    const handleUnsubscribe = () => {
        setLoading(true)

        dispatch(unsubscribetoTeacher(techernamesubcriber._id));
    };


    const dispatch = useDispatch()
    const data = {
        testId: test?._id,
        studentId: studentProfileData?._id
    }
    useEffect(() => {
        if (isAuthenticated) {
            
            dispatch(fetchteacherSubscribers(data))
        }


    }, [subcribeSuccess, unsubcribeSuccess]);


    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }

        setLoading(false)

    }, [techernamesubcriber,isAuthenticated]);






    return (
        <div className="container mt-5">
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">General Instructions:</h2>
                <p className="card-text">Total duration of JEE-Main - 40503621_BTECH 8th Jan 2020 Shift 2 is 180 min.</p>
                <p className="card-text">The clock will be set at the server. The countdown timer in the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</p>
                <p className="card-text">The Questions Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:</p>
                <ul className="list-group mb-3">
                    <li className="list-group-item">
                        <FaCircle className="text-secondary mr-2" />
                        <span>You have not visited the question yet.</span>
                    </li>
                    <li className="list-group-item">
                        <FaTimesCircle className="text-danger mr-2" />
                        <span>You have not answered the question.</span>
                    </li>
                    <li className="list-group-item">
                        <FaCheckCircle className="text-success mr-2" />
                        <span>You have answered the question.</span>
                    </li>
                    <li className="list-group-item">
                        <FaExclamationCircle className="text-warning mr-2" />
                        <span>You have NOT answered the question, but have marked the question for review.</span>
                    </li>
                </ul>
                <p className="card-text">
                    I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like a mobile phone, Bluetooth devices, etc. / any prohibited material with me into the Examination Hall. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include a ban from future Tests / Examinations.
                </p>

                <h3>Test Creator: {techernamesubcriber.name}</h3>
                <p>Subscribers: {techernamesubcriber.subscribers && techernamesubcriber.subscribers.length}</p>

                {isSubscribed ? (
                    <Button variant="danger" onClick={handleUnsubscribe} disabled={loading} className="mr-3">
                        {loading ? <Spinner animation="border" size="sm" /> : 'Unsubscribe'}
                    </Button>
                ) : (
                    <Button variant="primary" onClick={handleSubscribe} disabled={loading} className="mr-3">
                        {loading ? <Spinner animation="border" size="sm" /> : 'Subscribe'}
                    </Button>
                )}

                <Button variant="success" onClick={handleStartTest} className="m-3">Start Test</Button>
            </div>
        </div>
    </div>
    );
};

export default TermsAndConditions;
