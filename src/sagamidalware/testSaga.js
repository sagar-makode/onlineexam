import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_STUDENT_TEST_FAILURE, FETCH_STUDENT_TEST_RESULT, FETCH_STUDENT_TEST_SUCCESS, FETCH_TEACHER_CREATED_TEST, FETCH_TEACHER_CREATED_TEST_FAILURE, FETCH_TEACHER_CREATED_TEST_SUCCESS, FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS, SUBMIT_TEST, TEST_SUBMIT_FAILURE, TEST_SUBMIT_SUCCESS } from '../actions/testActions';


// Worker Saga to fetch user data
function* fetchTestSaga() {
  try {
     // Retrieve token from sessionStorage

     const token = sessionStorage.getItem('token');
  
     // Make a request to fetch user data from the backend with token in headers
     const response = yield call(axios.get, "http://localhost:5000/tests", {
       headers: {
         Authorization: `Bearer${token}`
       }
     });
     const testData = response.data;
   
    // Dispatch success action with user role
    yield put({ type: FETCH_TESTS_SUCCESS, payload: testData});
  } catch (error) {
    // Dispatch failure action on error
    yield put({ type: FETCH_TESTS_SUCCESS, payload: { error: error.message } });
  }
}


function* handleSubmitTest(action) {
  try {

    const response = yield call(axios.put, "http://localhost:5000/examsubmit", action.payload);

    
    if (response.data) {
      const data = response.data
    
      
      yield put({ type: TEST_SUBMIT_SUCCESS, payload:data });
    }
  } catch (error) {
    console.error(error);
    yield put({ type: TEST_SUBMIT_FAILURE });
  }
}


function* fetchStudentResultSaga() {
  try {
     // Retrieve token from sessionStorage

     const token = sessionStorage.getItem('token');
     


     // Make a request to fetch user data from the backend with token in headers
     const response = yield call(axios.get, "http://localhost:5000/resulttable", {
       headers: {
         Authorization: `Bearer${token}`
       }
     });

     const testresultData = response.data;
    


    // Dispatch success action with user role
    yield put({ type: FETCH_STUDENT_TEST_SUCCESS, payload: testresultData});
  } catch (error) {
    // Dispatch failure action on error
    yield put({ type: FETCH_STUDENT_TEST_FAILURE, payload: { error: error.message } });
  }
}




function* fetchTeacherCreatedTestSaga() {
  try {
     // Retrieve token from sessionStorage

     const token = sessionStorage.getItem('token');
     


     // Make a request to fetch user data from the backend with token in headers
     const response = yield call(axios.get, "http://localhost:5000/teachercreatedtest", {
       headers: {
         Authorization: `Bearer${token}`
       }
     });

     const testresultforTeacher = response.data;
  
    yield put({ type: FETCH_TEACHER_CREATED_TEST_SUCCESS, payload: testresultforTeacher});
  } catch (error) {
   
    yield put({ type: FETCH_TEACHER_CREATED_TEST_FAILURE, payload: { error: error.message } });
  }
}




// Watcher Saga to trigger fetch user data saga
function* fetchTestDataSaga() {
  yield takeEvery(FETCH_TESTS_REQUEST, fetchTestSaga);
  yield takeEvery(SUBMIT_TEST, handleSubmitTest);
  yield takeEvery(FETCH_STUDENT_TEST_RESULT, fetchStudentResultSaga);
  yield takeEvery(FETCH_TEACHER_CREATED_TEST, fetchTeacherCreatedTestSaga);


 

}

export default fetchTestDataSaga;
