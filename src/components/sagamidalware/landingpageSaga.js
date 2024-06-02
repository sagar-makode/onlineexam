// sagas/userSaga.js

import { put, takeLatest,call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ALL_CREATERS_FAILURE_FOR_HOMEPAGE, FETCH_ALL_CREATERS_FOR_HOMEPAGE, FETCH_ALL_CREATERS_SUCCESS_FOR_HOMEPAGE } from '../actions/landingPageActions';


  function* fetchAllCreaterSagaforHomepage() {
    try {
      
       const response = yield call(axios.get, "http://localhost:5000/allcreaterforhomepage");
   
      const CreaterData = response.data;
    
  
      // Dispatch success action with user role
      yield put({ type: FETCH_ALL_CREATERS_SUCCESS_FOR_HOMEPAGE, payload: CreaterData});
    } catch (error) {
      // Dispatch failure action on error
      yield put({ type: FETCH_ALL_CREATERS_FAILURE_FOR_HOMEPAGE, payload: { error: error.message } });
    }
  }
  

 






 
function* landingpageSaga() {
  yield takeLatest(FETCH_ALL_CREATERS_FOR_HOMEPAGE, fetchAllCreaterSagaforHomepage);



}

export default landingpageSaga;
