import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchteacherSubscribers, subscribeToTeacher, unsubscribetoTeacher } from '../../actions/subscribers';
import { Button, Spinner } from 'react-bootstrap';


const TermsAndConditions = ({ test, studentProfileData, onAttemptTest }) => {

    const techernamesubcriber = useSelector(state => state.subcriptiondata.techerData);
    const subcribeSuccess = useSelector(state => state.subcriptiondata.subcribeSuccess);
    const unsubcribeSuccess = useSelector(state => state.subcriptiondata.unsubcribeSuccess);
    const isSubscribed = useSelector(state => state.subcriptiondata.isSubscribed);

    const [loading, setLoading] = useState(false);

    const handleStartTest = () => {
        // Trigger the attempt test function from AllTests component
        onAttemptTest();
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
        testId: test._id,
        studentId: studentProfileData._id
    }
    useEffect(() => {

        dispatch(fetchteacherSubscribers(data))

    }, [subcribeSuccess, unsubcribeSuccess]);

    useEffect(() => {

       setLoading(false)

    }, [techernamesubcriber]);






    return (
        <div>
            <div>




                <h2>General Instructions:</h2>
                <p>Total duration of JEE-Main - 40503621_BTECH 8th Jan 2020 Shift 2 is 180 min.</p>
                <p>The clock will be set at the server. The countdown timer in the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</p>
                <p>The Questions Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:</p>
                <ul>
                    <li>You have not visited the question yet.</li>
                    <li>You have not answered the question.</li>
                    <li>You have answered the question.</li>
                    <li>You have NOT answered the question, but have marked the question for review.</li>
                </ul>
                {/* Add other instructions */}
                <p>
                    I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like a mobile phone, Bluetooth devices, etc. / any prohibited material with me into the Examination Hall. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include a ban from future Tests / Examinations.
                </p>


                <h3>Test Creater : {techernamesubcriber.name}</h3>

                <p>Subscribers: {techernamesubcriber.subscribers && techernamesubcriber.subscribers.length}</p>

                {isSubscribed ? (
                    <Button variant="danger" onClick={handleUnsubscribe} disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Unsubscribe'}
                    </Button>
                ) : (
                    <Button variant="primary" onClick={handleSubscribe} disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Subscribe'}
                    </Button>
                )}

                <button className='m-3 btn btn-success' onClick={handleStartTest}>Start Test</button>

            </div>
        </div>
    );
};

export default TermsAndConditions;
