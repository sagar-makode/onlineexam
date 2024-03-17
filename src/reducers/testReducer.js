// In your reducers/testReducer.js

import { CURRENT_SELECT_TEST, FETCH_TESTS_FAILURE, FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS } from "../actions/testActions";

const initialState = {
    tests: [],
    loading: false,
    error: null,
    currentselectedTest: [],
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
      default:
        return state;
    }
  };
  
  export default testReducer;
  