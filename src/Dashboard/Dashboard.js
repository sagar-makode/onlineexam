
import React, { useEffect } from 'react';
import "./dashboard.css"

import StudentDashboard from './StudentDashBoard';
import TeacherDashboard from './TeacherDashBoard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDataRequest } from '../actions/dashboardActions';


const Dashboard = () => {
  // Get user role from Redux store
  
  const dispatch = useDispatch()
  const userData = useSelector(state => state.dashboard.userData);
  console.log(userData);


  useEffect(() => {
    // Fetch user data when component mounts
    dispatch(fetchUserDataRequest());
  }, [dispatch]);



  return (
    <div>
      {userData.role === "student" ? <StudentDashboard /> : <TeacherDashboard  />}
    </div>
  );
};

export default Dashboard;