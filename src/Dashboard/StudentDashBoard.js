import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTests, selectedTest } from '../actions/testActions';

import {useNavigate } from 'react-router-dom';

function StudentDashBoard() {


  // const location = useLocation();
  // const answers = location.state.userAnswers;
  // console.log(answers);
  const dispatch = useDispatch()

  // const studentProfileData = useSelector(state => state.dashboard.userData);
  const testsData = useSelector(state => state.tests.tests);
  console.log("this is test Data ", testsData);

  const [activeTab, setActiveTab] = useState('profile');




  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  console.log(activeTab);
  const navigate = useNavigate()
  const tests = {
    name: "Sagar"

  }
  console.log('Exam Data:', testsData);

  const handleAttemptTest = async (test) => {
    // setSelectedTest(test); // Set the selected test
    // setActiveTab('liveExam');

    // const testData = test.questions

    dispatch(selectedTest(test));

    navigate(`/liveexam`, { state: { test } });


  };


  useEffect(() => {
    // Fetch tests when component mounts
    console.log("dash");
    dispatch(fetchTests());
  }, [dispatch]);





  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

 
 

  return (
    //   <div className="container-fluid">
    //   <div className="row">
    //     {/* Sidebar */}
    //     <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    //       <div className="sidebar-sticky">
    //         <ul className="nav flex-column">
    //           <li className="nav-item">
    //             <button
    //               className={`nav-link btn btn-link ${activeTab === 'profile' ? 'active' : ''}`}
    //               onClick={() => handleTabClick('profile')}
    //             >
    //               Student Profile
    //             </button>
    //           </li>
    //           <li className="nav-item">
    //             <button
    //               className={`nav-link btn btn-link ${activeTab === 'takeTest' ? 'active' : ''}`}
    //               onClick={() => handleTabClick('takeTest')}
    //             >
    //               Take Test
    //             </button>
    //           </li>
    //           <li className="nav-item">
    //             <button
    //               className={`nav-link btn btn-link ${activeTab === 'results' ? 'active' : ''}`}
    //               onClick={() => handleTabClick('results')}
    //             >
    //               Test Results
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>

    //     {/* Main content */}
    //     <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
    //       <div className="pt-3">
    //         {activeTab === 'profile' && (
    //           <div>
    //             <h2>Student Profile</h2>
    //             <p>FirstName: {studentProfileData.firstName}</p>
    //             <p>LastName: {studentProfileData.lastName}</p>
    //             <p>Email: {studentProfileData.email}</p>
    //             <p>Mobile No: {studentProfileData.mobileNumber}</p>
    //           </div>
    //         )}

    //         {activeTab === 'takeTest' && (
    //           <div>
    //             <h2>Take Test</h2>
    //             <div className="row">
    //                 {testsData.map((test, index) => (
    //                   <div className="col-md-4" key={index}>
    //                     <div className="card mb-4 shadow-sm">
    //                       <div className="card-body">

    //                         <h5 className="card-title">{test.testName}</h5>
    //                         <p className="card-text">Duration: {test.totalMinutes} minutes</p>
    //                         <p className="card-text">Toatal Marks: {test.totalMarks} minutes</p>

    //                         {/* Add other test information here */}
    //                         <button className="btn btn-primary"  onClick={() => handleAttemptTest(test)}>Attempt Test</button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>


    //             <div>
    //               {/* Render the LiveExam component with the selected test */}
    //               {/* <LiveExam questio = {selectedTest}/> */}
    //             </div>

    //           </div>
    //         )}

    //         {activeTab === 'results' && (
    //           <div>
    //             <h2>Test Results</h2>
    //             {/* Add your test results component here */}
    //           </div>
    //         )}
    //       </div>
    //     </main>
    //   </div>
    // </div>

    <div className = {isDarkMode ? 'dasboardbodydark' : 'dasboardbody'}>
      <nav className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
        <header>
          <div className="image-text">
            <span className="image">
              {/* <img src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z" alt="" /> */}
            </span>

            <div className="text logo-text">
              <span className="name">Stella Army </span>
              <span className="profession">Web developer</span>
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
              <li className="nav-link">
                <a  href="/">
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a  href="/">
                  <i className='bx bx-bar-chart-alt-2 icon'></i>
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>

              <li className="nav-link">
                <a  href="/">
                  <i className='bx bx-bell icon'></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a  href="/">
                  <i className='bx bx-pie-chart-alt icon'></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>

              <li className="nav-link">
                <a  href="/">
                  <i className='bx bx-heart icon'></i>
                  <span className="text nav-text">Likes</span>
                </a>
              </li>

              <li className="nav-link">
                <a  href="/">
                  <i className='bx bx-wallet icon'></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>

            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a  href="/">
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
    

    </div>
  )
}

export default StudentDashBoard