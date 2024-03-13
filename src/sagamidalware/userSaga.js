// sagas/userSaga.js

import { put, takeLatest,call } from 'redux-saga/effects';
import { SIGNIN_REQUEST, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, STUDENT_SIGNIN_REQUEST, TEACHER_SIGNIN_REQUEST } from '../actions/userActions';
import axios from 'axios';


function* handleSignup(action) {
    try {
      const response = yield call(axios.post, "http://localhost:5000/register", action.payload);

      console.log("callSucess",response);
      
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
      
      console.log("Teacher call Success", response);
  
      if (response.data) {
        // yield put({ type: SIGNIN_SUCCESS, payload: response.data }); 
      }
    } catch (error) {
      console.error(error);
      // yield put({ type: SIGNIN_FAILURE });
    }
  }


  function* handleStudentSignin(action) {
    try {
      const response = yield call(axios.post, "http://localhost:5000/studentlogin", action.payload);
      
      console.log("Student call Success", response);
  
      if (response.data) {
        // yield put({ type: SIGNIN_SUCCESS, payload: response.data }); 
      }
    } catch (error) {
      console.error(error);
      // yield put({ type: SIGNIN_FAILURE });
    }
  }
function* userSaga() {
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
  yield takeLatest(TEACHER_SIGNIN_REQUEST, handleTeacherSignin);
  yield takeLatest(STUDENT_SIGNIN_REQUEST, handleStudentSignin);


}

export default userSaga;
