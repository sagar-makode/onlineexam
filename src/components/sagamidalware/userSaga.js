// sagas/userSaga.js

import { put, takeLatest,call } from 'redux-saga/effects';
import {  PROFILE_UPDATE_FAILURE, PROFILE_UPDATE_SUCCESS, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, STUDENT_SIGNIN_REQUEST, TEACHER_SIGNIN_REQUEST, USER_PROFILE_UPDATE_REQUEST } from '../actions/userActions';
import axios from 'axios';


function* handleSignup(action) {
    try {
      const response = yield call(axios.post, "http://localhost:5000/register", action.payload);

    
      if (response.data) {
        yield put({ type: SIGNUP_SUCCESS });
      }
    } catch (error) {
      console.error(error);
      yield put({ type: SIGNUP_FAILURE });
    }
  }


  function* handleTeacherSignin(action) {
    try {
      const response = yield call(axios.post, "http://localhost:5000/teacherlogin", action.payload);
      
  
      if (response.data.token) {
        yield put({ type: SIGNIN_SUCCESS}); 
        sessionStorage.setItem('token', response.data.token);
        // window.location.href = '/dashboard';
      }
    } catch (error) {
      // console.error(error);
      yield put({ type: SIGNIN_FAILURE });
    }
  }


  function* handleStudentSignin(action) {
    try {
      const response = yield call(axios.post, "http://localhost:5000/studentlogin", action.payload);
      

  
      if (response.data.token) {
        yield put({ type: SIGNIN_SUCCESS}); 
        sessionStorage.setItem('token', response.data.token);
        // window.location.href = '/dashboard';
        

      }
    } catch (error) {
      yield put({ type: SIGNIN_FAILURE });
      // console.error(error);
    }
  }







  function* handleUpdateProfile(action) {
    try {
      // Make the API call to update the profile
      console.log("this is axios",action.payload);
      const response = yield call(axios.put, "http://localhost:5000/updateprofile", action.payload, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
        }
      });

      // Check if the response indicates a successful update
      if (response.data) {
        // Dispatch an action indicating success
        yield put({ type: PROFILE_UPDATE_SUCCESS });
      }
    } catch (error) {
      // If there's an error, log it and dispatch an action indicating failure
      // console.error(error);
      yield put({ type: PROFILE_UPDATE_FAILURE });
    }
  }
function* userSaga() {
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
  yield takeLatest(TEACHER_SIGNIN_REQUEST, handleTeacherSignin);
  yield takeLatest(STUDENT_SIGNIN_REQUEST, handleStudentSignin);
  yield takeLatest(USER_PROFILE_UPDATE_REQUEST, handleUpdateProfile);



}

export default userSaga;
