
import React, { useEffect, useState } from 'react';
import "./dashboard.css"

import StudentDashboard from './StudentDashboard/StudentDashBoard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDataRequest } from '../actions/dashboardActions';
import TeacherDashboard from './TeacherDashboard/TeacherDashboard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  // Get user role from Redux store
  
  const dispatch = useDispatch()
  const userData = useSelector(state => state.dashboard.userData);
  const navigate = useNavigate()
  
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const [loading, setLoading] = useState(true);
  
  console.log(isAuthenticated);
useEffect(()=>{
  const token = sessionStorage.getItem('token');
  if (!token || !isAuthenticated) {
    navigate("/login")
  }
})

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