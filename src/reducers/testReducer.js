// In your reducers/testReducer.js

import { FETCH_STUDENT_TEST_FAILURE, FETCH_STUDENT_TEST_SUCCESS, FETCH_TEACHER_CREATED_TEST_SUCCESS, FETCH_TESTS_FAILURE, FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS, TEST_SUBMIT_FAILURE, TEST_SUBMIT_SUCCESS } from "../actions/testActions";

const initialState = {
  tests: [],
  loading: false,
  error: null,
  testSubmitted: false,
  studenttestresult: [],
  teacherCreatedTest : [],
  finalresult:[],
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




    case TEST_SUBMIT_SUCCESS:
      return {
        ...state,
        finalresult:action.payload,
        testSubmitted: true


      }

    case TEST_SUBMIT_FAILURE:
      return {
        ...state,
        testSubmitted: false

      }


    case FETCH_STUDENT_TEST_SUCCESS:
      
      return {
        ...state,
        studenttestresult: action.payload,

      }

    case FETCH_STUDENT_TEST_FAILURE:
      
      return {
        ...state,
     
      };
      
    case FETCH_TEACHER_CREATED_TEST_SUCCESS:  
    return {
      ...state,
      teacherCreatedTest: action.payload,
    }


    default:
      return state;
  }
};

export default testReducer;
