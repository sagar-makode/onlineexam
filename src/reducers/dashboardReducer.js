import { FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_SUCCESS } from "../actions/dashboardActions";

// Define initial state
const initialState = {
    role: null,
    error: null,
    userData:""
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
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  