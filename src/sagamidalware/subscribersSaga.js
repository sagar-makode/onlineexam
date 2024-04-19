// sagas/userSaga.js

import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TEACHER_SUBCRIBERS_FAILURE, FETCH_TEACHER_SUBCRIBERS_FROM_EXAMID, FETCH_TEACHER_SUBCRIBERS_SUCCESS, SUBSCRIBE_TO_TEACHER_FAILURE, SUBSCRIBE_TO_TEACHER_REQUEST, SUBSCRIBE_TO_TEACHER_SUCCESS, UNSUBSCRIBE_TO_TEACHER_FAILURE, UNSUBSCRIBE_TO_TEACHER_REQUEST, UNSUBSCRIBE_TO_TEACHER_SUCCESS } from '../actions/subscribers';


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
  
    const data = yield call(axios.post, "http://localhost:5000/subscribeToTeacher", action.payload);
    
    yield put({ type: SUBSCRIBE_TO_TEACHER_SUCCESS });
  } catch (error) {
    yield put({ type: SUBSCRIBE_TO_TEACHER_FAILURE, error: error.message });
  }
}


function* unsubscribeToTeacherSaga(action) {
  try {
      yield call(axios.post, "http://localhost:5000/unsubscribetoTeacher", action.payload);
      yield put({ type: UNSUBSCRIBE_TO_TEACHER_SUCCESS});
  } catch (error) {
      yield put({ type: UNSUBSCRIBE_TO_TEACHER_FAILURE, error: error.message });
  }
}



function* subscribersSaga() {
  yield takeLatest(FETCH_TEACHER_SUBCRIBERS_FROM_EXAMID, getsubscribers);
  yield takeLatest(SUBSCRIBE_TO_TEACHER_REQUEST, subscribeToTeacherSaga);
  yield takeLatest(UNSUBSCRIBE_TO_TEACHER_REQUEST, unsubscribeToTeacherSaga);
  

}

export default subscribersSaga;
