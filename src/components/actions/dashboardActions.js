
export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';
export const CREATE_TEST_REQUEST = 'CREATE_TEST_REQUEST';



export const fetchUserDataRequest = () => ({
    type: FETCH_USER_DATA_REQUEST
  });
  
  export const fetchUserDataSuccess = (role) => ({
    type: FETCH_USER_DATA_SUCCESS,
    payload: { role }
  });
  
  export const fetchUserDataFailure = (error) => ({
    type: FETCH_USER_DATA_FAILURE,
    payload: { error }
  });


  export const CreateTestRequst = (testData) => ({
    type: CREATE_TEST_REQUEST,
    payload: testData
  });
  


