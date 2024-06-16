import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import CreateTest from './CreateTest';
import StudentResult from './StudentResult';
import Trash from './Trash'
import AllCreatedTest from './AllCreatedTest';
import Index from "./Index"
import { fetchTeacherCreatedTests, fetchTeacherCreatedTestsinBin } from '../../actions/testActions';
import AuthContext from '../../Navbar/AuthContext';
import UserProfile from './UserProfile';
import profileImage from "../../assets/profile image.png"
import GetfirstAndLastName from '../../common/GetfirstAndLastName';

function TeacherDashboard() {
    const dispatch = useDispatch()  
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading, setLoading] = useState(false);
    const teacherProfileData = useSelector(state => state.dashboard.userData);
    
    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
      logout();
    };
    const handleTabClick = (tab) => {
      setActiveTab(tab);  
      setIsSidebarOpen(false); // Close the sidebar when a tab is clicked
    
    };

  
  
    useEffect(() => {  
      setLoading(true);     
      dispatch(fetchTeacherCreatedTests());
      dispatch(fetchTeacherCreatedTestsinBin());     
      setLoading(false);
    }, [dispatch]);
  
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(false);
  
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    // const toggleDarkMode = () => {
    //   setIsDarkMode(!isDarkMode);
    // };
    
  

  return (
    <div>
         {loading ? (
          
        // Render the spinner only when loading is true
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (   <div className='main-container dasboardbody'>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={teacherProfileData.imagepath || profileImage} alt="" />
            </span>

            <div className="text logo-text">
          
              <span className="name">{GetfirstAndLastName(teacherProfileData.name)}</span>
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
            <li >
            <Link onClick={handleLogout} >
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
            {/* <h1>Dashboard Content</h1> */}
            <h2 className='m-3'>Dashboard</h2>

            <Index />
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
            <h2 className='m-3'>Created Test</h2>

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
      
           <h2 style={{marginLeft:"15px", marginTop:"15px"}}>Student Result</h2>

           <StudentResult/>

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
           <h2 className='m-3'>User Profile</h2>

                <UserProfile />
              </div>
              
            )}
      </div>
    </div>)}




    </div>
  )
}

export default TeacherDashboard