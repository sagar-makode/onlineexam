import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { CREATE_TEST_REQUEST, FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS } from '../actions/dashboardActions';
import { USER_AUTH_STATUS_FAILURE } from '../actions/userActions';


// Worker Saga to fetch user data
function* fetchUserDataSaga() {
  try {
     // Retrieve token from sessionStorage
     const token = sessionStorage.getItem('token');

     // Make a request to fetch user data from the backend with token in headers
     const response = yield call(axios.get, "http://localhost:5000/dashboard", {
       headers: {
         Authorization: `Bearer${token}`
       }
     });

    
    const userData = response.data;
  

    // Dispatch success action with user role
    yield put({ type: FETCH_USER_DATA_SUCCESS, payload: userData});
  } catch (error) {
    // Dispatch failure action on error
    if (error.response && error.response.status === 500) {
      // Redirect to login page
      yield put({ type: USER_AUTH_STATUS_FAILURE});

    } else {
      // Dispatch failure action on other errors
      // console.log(error);
      yield put({ type: FETCH_USER_DATA_FAILURE, payload: { error: error.message } });
    }
  }
}





function* handelCreateTest(action) {
  try {
  
    const response = yield call(axios.post, "http://localhost:5000/createtest", action.payload);


    
    if (response.data) {
      // yield put({ type: SIGNUP_SUCCESS });
    }
  } catch (error) {
    console.error(error);
    // yield put({ type: SIGNUP_FAILURE });
  }
}









// Watcher Saga to trigger fetch user data saga
function* fetchDashboardData() {
  yield takeEvery(FETCH_USER_DATA_REQUEST, fetchUserDataSaga);
  yield takeEvery(CREATE_TEST_REQUEST, handelCreateTest);

}

export default fetchDashboardData;
