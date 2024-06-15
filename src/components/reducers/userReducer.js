// userReducer.js
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, CLEAR_MESSAGE,RESET_OTP_SUCCESS, SIGNIN_SUCCESS, SIGNIN_FAILURE,OTP_REQUEST_SUCCESS, USER_AUTH_STATUS_FAILURE, PROFILE_UPDATE_SUCCESS, OTP_REQUEST_FAILURE, VARIFY_OTP_SUCCESS, VARIFY_OTP_FAILURE,  FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from '../actions/userActions';

const initialState = {
  loading: false,
  error: null,
  SignupSucess: false,
  SignINSucess: false,
  SignInFailure: false,
  isAuthenticated: true,
  updateprofileSucess: false,
  otpGenerated:false,
  varifiedOtp:false,
  otpGeneratedError:false,
  varifiedOTPError:false,
  forgotOTP:false,
  forgotOTPFailure:false,
  forgotPassword:false,
  forgotPasswordFailure:false
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

    case OTP_REQUEST_SUCCESS:
      return {
        ...state,
        loading:false,
        otpGenerated:true,        
        otpSuccess: action.payload,
      };
      case OTP_REQUEST_FAILURE:
      return {

        ...state,
        loading:action.payload,
        otpGeneratedError:true
      };
      case VARIFY_OTP_SUCCESS:
        return {
          ...state,
          loading:false,
          varifiedOtp:true,
          message:action.payload
        };


        case RESET_OTP_SUCCESS:
          return {
            ...state,
            otpSuccess: null,
          };
        case VARIFY_OTP_FAILURE:
        return {  
          ...state,
          loading:false,
          varifiedOTPError:true
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

        case FORGOT_PASSWORD_SUCCESS:
          return{
            ...state,
            forgotPassword:true,
          };
        
        case FORGOT_PASSWORD_FAILURE:
          return{
            ...state,
            forgotPasswordFailure:true,
          }
        
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
          updateprofileSucess:false,
          varifiedOtp:false,
          otpGenerated:false,
          otpGeneratedError:false,
          varifiedOTPError:false,


        };
        case PROFILE_UPDATE_SUCCESS:
          return{
            ...state,
            updateprofileSucess: true
          };
        
    default:
      return state;
  }
};

export default userReducer;
