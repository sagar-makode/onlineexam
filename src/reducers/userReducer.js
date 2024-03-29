// userReducer.js
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, CLEAR_MESSAGE, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions/userActions';

const initialState = {
  loading: false,
  error: null,
  SignupSucess: false,
  SignINSucess: false,
  SignInFailure: false
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
  
          SignINSucess: true

        };

        case SIGNIN_FAILURE:
      
                 return {
          ...state,
          SignInFailure: true

        };

      case CLEAR_MESSAGE:
        return {
          ...state,
          SignupSucess: false,
          SignINSucess: false,
          SignInFailure: false


        };
    default:
      return state;
  }
};

export default userReducer;
