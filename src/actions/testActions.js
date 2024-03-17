// Action creator to request fetching tests

export const FETCH_TESTS_REQUEST= 'FETCH_TESTS_REQUEST';
export const FETCH_TESTS_SUCCESS= 'FETCH_TESTS_SUCCESS';
export const FETCH_TESTS_FAILURE= 'FETCH_TESTS_FAILURE';
export const CURRENT_SELECT_TEST= 'CURRENT_SELECT_TEST';







export const fetchTests = () => (
    {
    type: FETCH_TESTS_REQUEST,
  });
  
  // Action creator for successful fetching of tests
  export const fetchTestsSuccess = (tests) => ({
    type: FETCH_TESTS_SUCCESS,
    payload: tests,
  });
  
  // Action creator for failure to fetch tests
  export const fetchTestsFailure = (error) => ({
    type: FETCH_TESTS_FAILURE,
    payload: error,
  });
  

  export const selectedTest = (test) => ({
    type: CURRENT_SELECT_TEST,
    payload: test,
  });