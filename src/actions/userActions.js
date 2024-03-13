// userActions.js
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const TEACHER_SIGNIN_REQUEST = 'TEACHER_SIGNIN_REQUEST';
export const STUDENT_SIGNIN_REQUEST = 'STUDENT_SIGNIN_REQUEST';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signupRequest = userData => ({
  type: SIGNUP_REQUEST,
  payload: userData
});


export const StudentsigninRequest = formData => {
  // Your signin request logic here, such as API calls
  return {
    type: STUDENT_SIGNIN_REQUEST,
    payload: formData
  };
};

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

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: error
});