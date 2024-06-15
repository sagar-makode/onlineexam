// userActions.js
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const TEACHER_SIGNIN_REQUEST = 'TEACHER_SIGNIN_REQUEST';
export const STUDENT_SIGNIN_REQUEST = 'STUDENT_SIGNIN_REQUEST';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const OTP_REQUEST="OTP_REQUEST";
export const OTP_REQUEST_SUCCESS="OTP_REQUEST_SUCCESS";
export const OTP_REQUEST_FAILURE="OTP_REQUEST_FAILURE";

export const VARIFY_OTP="VARIFY_OTP";
export const VARIFY_OTP_SUCCESS="VARIFY_OTP_SUCCESS";
export const VARIFY_OTP_FAILURE="VARIFY_OTP_FAILURE";

export const FORGOT_PASSWORD="FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS="FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE="FORGOT_PASSWORD_FAILURE";


export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const USER_AUTH_STATUS_FAILURE = 'USER_AUTH_STATUS_FAILURE';

export const USER_PROFILE_UPDATE_REQUEST = 'USER_PROFILE_UPDATE_REQUEST';
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS';
export const PROFILE_UPDATE_FAILURE = 'PROFILE_UPDATE_FAILURE';

export const RESET_OTP_SUCCESS = 'RESET_OTP_SUCCESS';



export const signupRequest = userData => ({
  type: SIGNUP_REQUEST,
  payload: userData
});

export const generateOtp= data=>({
  type:OTP_REQUEST,
  payload:data
})

export const resetPassword =data=>({
  type:FORGOT_PASSWORD,
  payload:data
})

export const forgotPasswordsuccess =()=>({
  type:FORGOT_PASSWORD_SUCCESS,
})

export const forgotPasswordFailure =()=>({
  type:FORGOT_PASSWORD_FAILURE
})


export const varifyOtp= otpData=>({
  type:VARIFY_OTP,
  payload:otpData
})


export const StudentsigninRequest = formData => {
  // Your signin request logic here, such as API calls
  return {
    type: STUDENT_SIGNIN_REQUEST,
    payload: formData
  };
};

export const resetOtpSuccess = () => ({
  type: RESET_OTP_SUCCESS,
});

export const TeachersigninRequest = formData => {
  // Your signin request logic here, such as API calls
  return {
    type: TEACHER_SIGNIN_REQUEST,
    payload: formData
  };
};
export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const otpSuccess = () => ({
  type: OTP_REQUEST_SUCCESS
});

export const varifyOtpSuccess = () => ({
  type: VARIFY_OTP_SUCCESS
});

export const varifyOtpFailure = () => ({
  type: VARIFY_OTP_FAILURE
});


export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: error
});

export const otpFailure = error => ({
  type: OTP_REQUEST_FAILURE,
  payload: error
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});


export const userProfileUpdateRequest = userData => ({
  type: USER_PROFILE_UPDATE_REQUEST,
  payload: userData
});
