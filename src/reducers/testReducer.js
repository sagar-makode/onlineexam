// In your reducers/testReducer.js

import { CURRENT_SELECT_TEST, FETCH_TESTS_FAILURE, FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS, TEST_SUBMIT_FAILURE, TEST_SUBMIT_SUCCESS } from "../actions/testActions";

const initialState = {
    tests: [],
    loading: false,
    error: null,
    currentselectedTest: [],
    testSubmitted : false
  };
  
  const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TESTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TESTS_SUCCESS:
        return {
          ...state,
          tests: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_TESTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      


      case CURRENT_SELECT_TEST:
        return {
          ...state,
          currentselectedTest: action.payload,

        }


        
      case TEST_SUBMIT_SUCCESS:
        return {
          ...state,
          testSubmitted: true
     

        }

        case TEST_SUBMIT_FAILURE:
          return {
            ...state,
            testSubmitted :false
       
          }
      default:
        return state;
    }
  };
  
  export default testReducer;
  