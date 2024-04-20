import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import avtar from '../../assets/pngegg.png';
import { Spinner } from 'react-bootstrap';
import CreateTest from './CreateTest';
import StudentResult from './StudentResult';
import Trash from './Trash'
import AllCreatedTest from './AllCreatedTest';
import Index from "./Index"
import { fetchTeacherCreatedTests, fetchTeacherCreatedTestsinBin } from '../../actions/testActions';

function TeacherDashboard() {
    const dispatch = useDispatch()  
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading, setLoading] = useState(false);
    const teacherProfileData = useSelector(state => state.dashboard.userData);
   
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);  };
  
  
    useEffect(() => {
  
      setLoading(true)
     
      dispatch(fetchTeacherCreatedTests());
      dispatch(fetchTeacherCreatedTestsinBin());
     
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
              <span className="name">{teacherProfileData.name}</span>
              <span className="profession">{teacherProfileData.role}</span>
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

              <li className={`nav-link ${activeTab === 'createTest' ? 'active' : ''}`} onClick={() => handleTabClick('createTest')}>
                <Link  >
                  <i className='bx bx-notepad icon'></i>

                  <span className="text nav-text">Create Test</span>

                </Link>


              </li>



              <li className={`nav-link ${activeTab === 'allcreatedtest' ? 'active' : ''}`} onClick={() => handleTabClick('allcreatedtest')}>
                <Link >
                  <i className='bx bxs-folder-open icon'></i>

                  <span className="text nav-text">All Created Test</span>
                </Link>
              </li>

              <li className={`nav-link ${activeTab === 'studentresult' ? 'active' : ''}`} onClick={() => handleTabClick('studentresult')}>
                <Link >
                  <i className='bx bx-bar-chart icon'></i>
                  <span className="text nav-text">Student Result</span>
                </Link>
              </li>


              {/* <li className={`nav-link ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => handleTabClick('wishlist')}>
                <Link >
                  <i className='bx bx-bookmark-heart icon'></i>
                  <span className="text nav-text">Wishlist</span>

                </Link>
              </li> */}


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

            <li className={`nav-link ${activeTab === 'trash' ? 'active' : ''}`} onClick={() => handleTabClick("trash")}>

                <Link >
             
                  <i className='bx bx-recycle icon'></i>
                  <span className="text nav-text" >Trash</span>
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
            {/* <h1>Dashboard Content</h1> */}
            <Index/>
          </div>
        )}
        {activeTab === 'createTest' && (
          <div>
            {/* Live Test content */}
            {/* <h1>Create your test</h1> */}
            <CreateTest/>
          
          </div>
        )}
        {activeTab === 'allcreatedtest' && (
          <div>
          <AllCreatedTest/>

          </div>
        )}
         {activeTab === 'trash' && (
          <div>
          <Trash/>

          </div>
        )}

        {activeTab === 'studentresult' && (
          <div>
            
           {/* <studentresults/> */}
           {/* <h1>Student Result</h1> */}
           <StudentResult/>

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

export default TeacherDashboard