// userReducer.js
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, CLEAR_MESSAGE, SIGNIN_SUCCESS, SIGNIN_FAILURE, USER_AUTH_STATUS_FAILURE, PROFILE_UPDATE_SUCCESS } from '../actions/userActions';

const initialState = {
  loading: false,
  error: null,
  SignupSucess: false,
  SignINSucess: false,
  SignInFailure: false,
  isAuthenticated: true,
  updateprofileSucess: false,

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        SignupSucess: true
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

      case SIGNIN_SUCCESS:
        return {
          ...state,
  
          SignINSucess: true,
          isAuthenticated: true

        };

        case SIGNIN_FAILURE:
      
                 return {
          ...state,
          SignInFailure: true

        };
        
        case USER_AUTH_STATUS_FAILURE:
      
                 return {
          ...state,
          isAuthenticated:false

        };

      case CLEAR_MESSAGE:
        return {
          ...state,
          SignupSucess: false,
          SignINSucess: false,
          SignInFailure: false,
          updateprofileSucess:false


        };
        case PROFILE_UPDATE_SUCCESS:
          return{
            ...state,
            updateprofileSucess: true
          }

        
    default:
      return state;
  }
};

export default userReducer;
