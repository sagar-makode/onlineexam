// sagas/userSaga.js

import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ALL_CREATERS, FETCH_ALL_CREATERS_FAILURE, FETCH_ALL_CREATERS_SUCCESS, FETCH_STUDENT_SUBCRIPTIONS, FETCH_STUDENT_SUBCRIPTIONS_SUCCESS, FETCH_TEACHER_SUBCRIBERS_FAILURE, FETCH_TEACHER_SUBCRIBERS_FROM_EXAMID, FETCH_TEACHER_SUBCRIBERS_SUCCESS, SUBSCRIBE_TO_TEACHER_FAILURE, SUBSCRIBE_TO_TEACHER_REQUEST, SUBSCRIBE_TO_TEACHER_SUCCESS, UNSUBSCRIBE_TO_TEACHER_FAILURE, UNSUBSCRIBE_TO_TEACHER_REQUEST, UNSUBSCRIBE_TO_TEACHER_SUCCESS } from '../actions/subscribers';


function* getsubscribers(action) {
  try {

    const testId = action.payload.testId
    const studentId = action.payload.studentId
    const response = yield call(axios.get, `http://localhost:5000/subcount/${testId}/${studentId}`);
    console.log(response);

    const teacherdata = response.data.teacherProfile;
    const isSubscribed = response.data.isSubscribed
    yield put({ type: FETCH_TEACHER_SUBCRIBERS_SUCCESS, payload: {teacherdata,isSubscribed } });


  } catch (error) {

    yield put({ type: FETCH_TEACHER_SUBCRIBERS_FAILURE });

  }
}


function* subscribeToTeacherSaga(action) {
  try {
    const token = sessionStorage.getItem('token');
  
 
    yield call(axios.post, "http://localhost:5000/subscribeToTeacher", action.payload, {
      headers: {
        Authorization: `Bearer${token}`
      }
    });

    
    yield put({ type: SUBSCRIBE_TO_TEACHER_SUCCESS });
  } catch (error) {
    yield put({ type: SUBSCRIBE_TO_TEACHER_FAILURE, error: error.message });
  }
}


function* unsubscribeToTeacherSaga(action) {
  try {
    const token = sessionStorage.getItem('token');

      yield call(axios.post, "http://localhost:5000/unsubscribetoTeacher", action.payload, {
        headers: {
          Authorization: `Bearer${token}`
        }
      });

      yield put({ type: UNSUBSCRIBE_TO_TEACHER_SUCCESS});
  } catch (error) {
      yield put({ type: UNSUBSCRIBE_TO_TEACHER_FAILURE, error: error.message });
  }
}



function* fetchStudentSubcriptionsSaga() {
  try {
     // Retrieve token from sessionStorage
     const token = sessionStorage.getItem('token');

     // Make a request to fetch user data from the backend with token in headers
     const response = yield call(axios.get, "http://localhost:5000/studentsubcriptions", {
       headers: {
         Authorization: `Bearer${token}`
       }
     });

    
    const allSubscriptions = response.data;
    // Dispatch success action with user role
    yield put({ type: FETCH_STUDENT_SUBCRIPTIONS_SUCCESS, payload: allSubscriptions});
  } catch (error) {
    // Dispatch failure action on error
    // yield put({ type: FETCH_USER_DATA_FAILURE, payload: { error: error.message } });
  }
}


function* fetchAllCreaterSaga() {
  try {
    
     const token = sessionStorage.getItem('token');

     // Make a request to fetch user data from the backend with token in headers
     const response = yield call(axios.get, "http://localhost:5000/allcreater", {
      headers: {
        Authorization: `Bearer${token}`
      }
    });

    
    const userData = response.data;
  

    // Dispatch success action with user role
    yield put({ type: FETCH_ALL_CREATERS_SUCCESS, payload: userData});
  } catch (error) {
    // Dispatch failure action on error
    yield put({ type: FETCH_ALL_CREATERS_FAILURE, payload: { error: error.message } });
  }
}



function* subscribersSaga() {
  yield takeLatest(FETCH_TEACHER_SUBCRIBERS_FROM_EXAMID, getsubscribers);
  yield takeLatest(SUBSCRIBE_TO_TEACHER_REQUEST, subscribeToTeacherSaga);
  yield takeLatest(UNSUBSCRIBE_TO_TEACHER_REQUEST, unsubscribeToTeacherSaga);
  yield takeLatest(FETCH_STUDENT_SUBCRIPTIONS, fetchStudentSubcriptionsSaga);
  yield takeLatest(FETCH_ALL_CREATERS, fetchAllCreaterSaga);


  

}


export default subscribersSaga;
