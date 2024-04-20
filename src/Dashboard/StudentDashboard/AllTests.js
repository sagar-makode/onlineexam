import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import TermsAndConditions from './TearmsAndConditions';


function AllTests() {
    const testsData = useSelector(state => state.tests.tests);
    const studentProfileData = useSelector(state => state.dashboard.userData);

    const [isseletedtest, setisSeletedtest] = useState(false);
    const [seletedTestData, setseletedTestData] = useState(false);



    const navigate = useNavigate()

    const handleAttemptTest = async (test) => {
        setseletedTestData(test)
        setisSeletedtest(true)
    };


    

    const handleAttemptTestFromTerms = (test) => {
       
        navigate(`/liveexam`, { state: { seletedTestData, studentProfileData } });
       
    };


    return (
        <div>
            {/* Live Test content */}

            {
                isseletedtest ? (
                    <div>
                        <TermsAndConditions
                        test={seletedTestData}
                        studentProfileData={studentProfileData}
                        onAttemptTest={handleAttemptTestFromTerms}
                        />
                    </div>


                ) : (<div>
                    <h1>Live Test Content</h1>
                    <div className="row">
                        {testsData.map((test, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">

                                        <h5 className="card-title">{test.testName}</h5>
                                        <p className="card-text">Duration: {test.totalMinutes} minutes</p>
                                        <p className="card-text">Toatal Marks: {test.totalMarks} minutes</p>

                                        {/* Add other test information here */}
                                        <button className="btn btn-primary" onClick={() => handleAttemptTest(test)}>Attempt Test</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
            }


        </div>
    )
}

export default AllTests