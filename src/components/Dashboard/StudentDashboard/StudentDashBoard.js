import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentTestresult, fetchTests } from '../../actions/testActions';
import { Spinner } from 'react-bootstrap';

import profileImage from "../../assets/profile image.png"

import { Link } from 'react-router-dom';
import TestResults from './TestResults';
import AllTests from './AllTests';
import Subcriptions from './Subcriptions';
import ALLCreater from './ALLCreater';
import AuthContext from '../../Navbar/AuthContext';
import UserProfile from './UserProfile';
import { fetchAllCretater, fetchStudentSubcriptions } from '../../actions/subscribers';
import GetfirstAndLastName from '../../common/GetfirstAndLastName';
import Index from './Index';

function StudentDashBoard() {



  const dispatch = useDispatch()

  const studentProfileData = useSelector(state => state.dashboard.userData);



  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(false); // Close the sidebar when a tab is clicked

  };

  const handleLogout = () => {
    logout();
  };


  useEffect(() => {

    setLoading(true)
    dispatch(fetchTests());
    dispatch(fetchStudentTestresult())
    dispatch(fetchStudentSubcriptions())
    dispatch(fetchAllCretater());



    setLoading(false)
  }, [dispatch]);



  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (

    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (

        <div className='main-container dasboardbody'>
          <nav className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`} ref={sidebarRef}>
            <header>
              <div className="image-text">
                <span className="image">
                  <img src={studentProfileData.imagepath || profileImage} alt="" />
                </span>

                <div className="text logo-text">
                  <span className="name">{GetfirstAndLastName(studentProfileData.name)}</span>
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
                    <Link >
                      <i className='bx bx-home-alt icon'></i>
                      <span className="text nav-text">Dashboard</span>
                    </Link>


                  </li>

                  <li className={`nav-link ${activeTab === 'liveTest' ? 'active' : ''}`} onClick={() => handleTabClick('liveTest')}>
                    <Link  >
                      <i className='bx bx-notepad icon'></i>

                      <span className="text nav-text">Live Test</span>

                    </Link>


                  </li>


{/* 
                  <li className={`nav-link ${activeTab === 'testSeries' ? 'active' : ''}`} onClick={() => handleTabClick('testSeries')}>
                    <Link >
                      <i className='bx bxs-folder-open icon'></i>

                      <span className="text nav-text">Test Series</span>
                    </Link>
                  </li> */}

                  <li className={`nav-link ${activeTab === 'testresult' ? 'active' : ''}`} onClick={() => handleTabClick('testresult')}>
                    <Link >
                      <i className='bx bx-bar-chart icon'></i>
                      <span className="text nav-text">Test Result</span>
                    </Link>
                  </li>

                  <li className={`nav-link ${activeTab === 'subscriptions' ? 'active' : ''}`} onClick={() => handleTabClick('subscriptions')}>
                    <Link >

                      <span className="material-symbols-outlined icon">
                        subscriptions
                      </span>

                      <span className="text nav-text">Subscriptions</span>
                    </Link>
                  </li>



                  <li className={`nav-link ${activeTab === 'allcreater' ? 'active' : ''}`} onClick={() => handleTabClick('allcreater')}>
                    <Link >

                      <span className="material-symbols-outlined icon">
                        groups
                      </span>

                      <span className="text nav-text">ALL Creaters</span>
                    </Link>
                  </li>
                  {/* <li className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => handleTabClick('wishlist')}>
                    <Link >
                      <i className='bx bx-bookmark-heart icon'></i>
                      <span className="text nav-text">Wishlist</span>

                    </Link>
                  </li> */}


                  {/* <li className="nav-link">
                    <Link >
                      <i className='bx bx-bell icon'></i>
                      <span className="text nav-text">Notifications</span>
                    </Link>
                  </li> */}
                  <li className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabClick('profile')}>
                    <Link >


                      <span className="material-symbols-outlined icon">
                        account_circle
                      </span>

                      <span className="text nav-text">Profile</span>
                    </Link>
                  </li>

                </ul>
              </div>

              <div className="bottom-content">
                <li>
                  <Link onClick={handleLogout} >
                    <i className='bx bx-log-out icon'></i>
                    <span className="text nav-text">Logout</span>
                  </Link>
                </li>

                {/* <li className="mode">
                  <div className="sun-moon">
                    <i className='bx bx-moon icon moon'></i>
                    <i className='bx bx-sun icon sun'></i>
                  </div>
                  <span className="mode-text text">Dark mode</span>

                  <div className="toggle-switch" onClick={toggleDarkMode}>
                    <span className="switch" ></span>
                  </div>
                </li> */}

              </div>
            </div>

          </nav>


          <div className="main-content" style={{ marginLeft: isSidebarOpen ? '250px' : '90px', transition: 'margin-left 0.3s ease' }}>
            {/* Render content based on activeTab */}
            {activeTab === 'dashboard' && (
              <div>
                {/* Dashboard content */}
                <h2 className='m-3'>Dashboard</h2>
                {/* <SmallStudentDahboard/> */}
                <Index/>

              </div>
            )}
            {activeTab === 'liveTest' && (
              <div>
                <h2 style={{marginLeft:"15px", marginTop:"15px"}} className='mb-0 p-0'>All Live Test</h2>
                {/* <h2>Live Test</h2> */}


                <AllTests />
              </div>

            )}
            {activeTab === 'testSeries' && (
              <div>
                Test Series
                {/* <TestSeries /> */}
              </div>
            )}

            {activeTab === 'testresult' && (
              <div>
                <h2 style={{marginLeft:"15px", marginTop:"15px"}} className='mb-0 p-0'>Results</h2>


                <TestResults />
              </div>
            )}
            {activeTab === 'subscriptions' && (
              <div>

                <Subcriptions />
              </div>
            )}
            {activeTab === 'allcreater' && (
              <div>

                <ALLCreater />
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                {/* Test Series content */}
                <h1>Wishlist Content</h1>
              
                
              </div>
              
            )}
             {activeTab === 'profile' && (
              <div>
                {/* Test Series content */}
                {/* <h1>Wishlist Content</h1>
               */}
                <UserProfile />
              </div>
              
            )}
          </div>
        </div>
      )}




    </div>





  )
}

export default StudentDashBoard