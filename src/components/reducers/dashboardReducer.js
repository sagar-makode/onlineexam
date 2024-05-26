import { CREATE_TEST_FAILURE, CREATE_TEST_SUCCESS, FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_SUCCESS } from "../actions/dashboardActions";
import { CLEAR_MESSAGE } from "../actions/userActions";

// Define initial state
const initialState = {
    role: null,
    error: null,
    userData:"",
    testCreatedSuccess:false,
    testCreatedFailure:false
  };
    
  // Define reducer function
  const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_DATA_SUCCESS:
         
        return {
          ...state,
          userData: action.payload,
          error: null
        };
      case FETCH_USER_DATA_FAILURE:
        return {
          ...state,
          role: null,
          error: action.payload.error
        };
        case CREATE_TEST_SUCCESS:
        return {
          ...state,
          testCreatedSuccess: true
        };
        case CREATE_TEST_FAILURE:
          return {
            ...state,
            testCreatedFailure: true
          };
          case CLEAR_MESSAGE:
        return {
          ...state,
          testCreatedSuccess: false,
          testCreatedFailure: false
        };
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  