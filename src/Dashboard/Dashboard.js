
import React, { useEffect, useState } from 'react';
import "./dashboard.css"

import StudentDashboard from './StudentDashboard/StudentDashBoard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDataRequest } from '../actions/dashboardActions';
import TeacherDashboard from './TeacherDashboard/TeacherDashboard';


const Dashboard = () => {
  // Get user role from Redux store
  
  const dispatch = useDispatch()
  const userData = useSelector(state => state.dashboard.userData);
  
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Fetch user data when component mounts
    dispatch(fetchUserDataRequest());
  }, [dispatch]);

  useEffect(() => {
    if (userData.role !== undefined) {
      setLoading(false);
    }
  }, [userData]);

  if (loading) {
    // You can show a loading spinner or message here
    return <div>Loading...</div>;
  }


  return (
    <div>
      {userData.role === "student" ? <StudentDashboard /> : <TeacherDashboard  />}
    </div>
  );
};

export default Dashboard;