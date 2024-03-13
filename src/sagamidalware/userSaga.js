// sagas/userSaga.js

import { put, takeLatest,call } from 'redux-saga/effects';
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../actions/userActions';
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

function* userSaga() {
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
}

export default userSaga;
