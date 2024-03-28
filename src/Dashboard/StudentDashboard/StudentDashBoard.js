import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTests, selectedTest } from '../../actions/testActions';
import avtar from "../../assets/pngegg.png"
import { Spinner } from 'react-bootstrap';


import { useNavigate } from 'react-router-dom';
import TestSeries from './TestSeries';
import TestResults from './TestResults';

function StudentDashBoard() {


  // const location = useLocation();
  // const answers = location.state.userAnswers;
  // console.log(answers);
  const dispatch = useDispatch()

  const studentProfileData = useSelector(state => state.dashboard.userData);
  const testsData = useSelector(state => state.tests.tests);
  // console.log("this is test Data ", testsData);



  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  console.log(activeTab);
  const navigate = useNavigate()
  
  console.log('Exam Data:', testsData);

  const handleAttemptTest = async (test) => {
    // setSelectedTest(test); // Set the selected test
    // setActiveTab('liveExam');

    // const testData = test.questions

    dispatch(selectedTest(test));

    navigate(`/liveexam`, { state: { test, studentProfileData } });


  };

  console.log(activeTab);

  useEffect(() => {
    // Fetch tests when component mounts
    // console.log("dash");
    setLoading(true)
    dispatch(fetchTests());
    setLoading(false)
  }, [dispatch]);





  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(isSidebarOpen);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  



  return (

    <div>
         {loading ? (
        // Render the spinner only when loading is true
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (   <div className={`main-container ${isDarkMode ? 'dasboardbodydark' : 'dasboardbody'}`}>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={avtar} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">{studentProfileData.name}</span>
              <span className="profession">{studentProfileData.role}</span>
            </div>
          </div>

          <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">

            <li className="search-box">
              <i className='bx bx-search icon'></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleTabClick('dashboard')}>
                <a >
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text">Dashboard</span>
                </a>


              </li>

              <li className={`nav-link ${activeTab === 'liveTest' ? 'active' : ''}`} onClick={() => handleTabClick('liveTest')}>
                <a  >
                  <i className='bx bx-notepad icon'></i>

                  <span className="text nav-text">Live Test</span>

                </a>


              </li>



              <li className={`nav-link ${activeTab === 'testSeries' ? 'active' : ''}`} onClick={() => handleTabClick('testSeries')}>
                <a >
                  <i className='bx bxs-folder-open icon'></i>

                  <span className="text nav-text">Test Series</span>
                </a>
              </li>

              <li className={`nav-link ${activeTab === 'testresult' ? 'active' : ''}`} onClick={() => handleTabClick('testresult')}>
                <a >
                  <i className='bx bx-bar-chart icon'></i>
                  <span className="text nav-text">Test Result</span>
                </a>
              </li>


              <li className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => handleTabClick('wishlist')}>
                <a >
                  <i className='bx bx-bookmark-heart icon'></i>
                  <span className="text nav-text">Wishlist</span>

                </a>
              </li>


              <li className="nav-link">
                <a >
                  <i className='bx bx-bell icon'></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a >
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className='bx bx-moon icon moon'></i>
                <i className='bx bx-sun icon sun'></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch" onClick={toggleDarkMode}>
                <span className="switch" ></span>
              </div>
            </li>

          </div>
        </div>

      </nav>


      <div className="main-content" style={{ marginLeft: isSidebarOpen ? '250px' : '90px', transition: 'margin-left 0.3s ease' }}>
        {/* Render content based on activeTab */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Dashboard content */}
            <h1>Dashboard Content</h1>
          </div>
        )}
        {activeTab === 'liveTest' && (
          <div>
            {/* Live Test content */}
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
          </div>
        )}
        {activeTab === 'testSeries' && (
          <div>
            {/* Test Series content */}
            <TestSeries/>
          </div>
        )}

        {activeTab === 'testresult' && (
          <div>
            
           <TestResults/>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div>
            {/* Test Series content */}
            <h1>Wishlist Content</h1>
          </div>
        )}
      </div>
    </div>)}




    </div>


 


  )
}

export default StudentDashBoard