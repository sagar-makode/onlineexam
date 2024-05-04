// sagas/userSaga.js

import { put, takeLatest,call } from 'redux-saga/effects';
import {  SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, STUDENT_SIGNIN_REQUEST, TEACHER_SIGNIN_REQUEST } from '../actions/userActions';
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
function* userSaga() {
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
  yield takeLatest(TEACHER_SIGNIN_REQUEST, handleTeacherSignin);
  yield takeLatest(STUDENT_SIGNIN_REQUEST, handleStudentSignin);


}

export default userSaga;
