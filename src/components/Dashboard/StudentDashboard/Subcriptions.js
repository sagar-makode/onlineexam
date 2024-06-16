import React, { useEffect, useState } from 'react'
import { fetchStudentSubcriptions } from '../../actions/subscribers';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import profileimag from "../../assets/profile image.png";
import Quantitative_Aptitude from "../../assets/all_card_image/Quantitative Aptitude.jpg"
import History from "../../assets/all_card_image/History.jpg"
import Logical_reasoning from "../../assets/all_card_image/Logical reasoning.jpg"
import Computer from "../../assets/all_card_image/Computer.jpg"
import Economics from "../../assets/all_card_image/Economics.jpg"
import Geography from "../../assets/all_card_image/Economics.jpg"
import Mathematics from "../../assets/all_card_image/Mathematics.jpg"
import Current_affairs from "../../assets/all_card_image/Current affairs.jpg"
import General_knowledge from "../../assets/all_card_image/General knowledge.jpg"
import other from "../../assets/all_card_image/others.jpg";


function Subcriptions() {

  const studentSubcriptions = useSelector(state => state.subcriptiondata.studentSubcriptions);
  const [creatorId, setCreatorId] = useState();
  const [selectedCategory, setSelectedCategory] = useState('All');
  // const allCreterData = useSelector(state => state.subcriptiondata.allCreterwithSubStatus);

  const studentProfileData = useSelector(state => state.dashboard.userData);
  const handleAttemptTest = async (test) => {
    navigate(`/terms&conditions`, { state: { test, studentProfileData } });
  }


  const testsData = useSelector(state => state.tests.tests);
  const [creatorTests, setCreatorTests] = useState([]);
  const filteredcatagoryTests = selectedCategory === 'All' ? creatorTests : creatorTests.filter(test => test.category === selectedCategory);
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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStudentSubcriptions())

  }, [dispatch]);


  const navigate = useNavigate();

  useEffect(() => {
    // Filter tests based on creatorId
    const filteredTests = testsData.filter(test => test.teacherId === creatorId);
    setCreatorTests(filteredTests);
  }, [testsData, creatorId]);


  const handleBackClick = () => {
    setCreatorId(null);
  };
  return (
    <div>



      {creatorId ? (
        <div style={{ minHeight: "55vh" }}>

          <h4 className='text-center createdbytitle mt-4'><span style={{ color: "red" }}>-- </span>Created By {creatorTests.length > 0 ? creatorTests[0].teacherName : ''} <span style={{ color: "red" }}> --</span></h4>
          {creatorTests.length === 0 ? (
            <div>
              <p className='text-center'>No tests found for this creator.</p>
              <div className="d-flex justify-content-center mt-3">
                <button className='btn btn-primary card-text-button' onClick={handleBackClick}>Back</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-end align-items-center mb-3">

                <label htmlFor="categoryFilter" className="form-label catagorytitle me-2 mb-0">Category :</label>
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
                  // const creator = allCreterData.find(creator => creator.name === tests.teacherName);
                  // const creatorImage = creator ? creator.imagepath : profileimag;
                  const categoryImage = getCategoryImage(tests.category);

                  return (
                    <div key={index} className="col-6 col-md-4 col-lg-3 card-custom">
                      <div className="card">
                        <div className="card-body">
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
              <div className="d-flex justify-content-center mt-3">
                <button className='btn btn-primary card-text-button' onClick={handleBackClick}>Back</button>
              </div>
            </div>
          )}
        </div>) :



        (<div className="container mt-4">
          <h4 className='text-center'><span style={{ color: "red" }}>-- </span>My Subcriptions<span style={{ color: "red" }}> --</span></h4>
          <div className="creator-list">
            {studentSubcriptions.map((creater, index) => (
              <div key={index} className="creator-item" onClick={() => setCreatorId(creater._id)}>
                <div className="creator-item-content">
                  <img src={creater.imagepath ? creater.imagepath : profileimag} alt="Creator" className="creator-item-img" />
                  <div>{creater.name}</div>
                  <div>Subscribers: {creater.subscribers.length}</div>
                </div>
              </div>
            ))}
          </div>
        </div>)}

    </div>
  )
}

export default Subcriptions