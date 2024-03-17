import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS } from '../actions/testActions';


// Worker Saga to fetch user data
function* fetchTestSaga() {
  try {
     // Retrieve token from sessionStorage
     console.log("call2");
     const token = sessionStorage.getItem('token');
     


     // Make a request to fetch user data from the backend with token in headers
     const response = yield call(axios.get, "http://localhost:5000/tests", {
       headers: {
         Authorization: `Bearer${token}`
       }
     });

     const testData = response.data;
     console.log(response.data);

    // Dispatch success action with user role
    yield put({ type: FETCH_TESTS_SUCCESS, payload: testData});
  } catch (error) {
    // Dispatch failure action on error
    yield put({ type: FETCH_TESTS_SUCCESS, payload: { error: error.message } });
  }
}








// Watcher Saga to trigger fetch user data saga
function* fetchTestDataSaga() {
  yield takeEvery(FETCH_TESTS_REQUEST, fetchTestSaga);
 

}

export default fetchTestDataSaga;
