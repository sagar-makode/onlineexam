import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentTestresult, fetchTests } from '../../actions/testActions';
import avtar from "../../assets/pngegg.png"
import { Spinner } from 'react-bootstrap';


import { Link } from 'react-router-dom';
import TestSeries from './TestSeries';
import TestResults from './TestResults';
import AllTests from './AllTests';
import Subcriptions from './Subcriptions';
import ALLCreater from './ALLCreater';

function StudentDashBoard() {



  const dispatch = useDispatch()

  const studentProfileData = useSelector(state => state.dashboard.userData);



  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  useEffect(() => {

    setLoading(true)
    dispatch(fetchTests());
    dispatch(fetchStudentTestresult())
   
    setLoading(false)
  }, [dispatch]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };



  return (

    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (<div className={`main-container ${isDarkMode ? 'dasboardbodydark' : 'dasboardbody'}`}>
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



                <li className={`nav-link ${activeTab === 'testSeries' ? 'active' : ''}`} onClick={() => handleTabClick('testSeries')}>
                  <Link >
                    <i className='bx bxs-folder-open icon'></i>

                    <span className="text nav-text">Test Series</span>
                  </Link>
                </li>

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
                <li className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => handleTabClick('wishlist')}>
                  <Link >
                    <i className='bx bx-bookmark-heart icon'></i>
                    <span className="text nav-text">Wishlist</span>

                  </Link>
                </li>


                <li className="nav-link">
                  <Link >
                    <i className='bx bx-bell icon'></i>
                    <span className="text nav-text">Notifications</span>
                  </Link>
                </li>

              </ul>
            </div>

            <div className="bottom-content">
              <li className="">
                <Link >
                  <i className='bx bx-log-out icon'></i>
                  <span className="text nav-text">Logout</span>
                </Link>
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
              <AllTests />
            </div>

          )}
          {activeTab === 'testSeries' && (
            <div>
              {/* Test Series content */}
              <TestSeries />
            </div>
          )}

          {activeTab === 'testresult' && (
            <div>

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
        </div>
      </div>)}




    </div>





  )
}

export default StudentDashBoard