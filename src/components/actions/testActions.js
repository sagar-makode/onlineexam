// Action creator to request fetching tests

export const FETCH_TESTS_REQUEST= 'FETCH_TESTS_REQUEST';
export const FETCH_TESTS_SUCCESS= 'FETCH_TESTS_SUCCESS';
export const FETCH_TESTS_FAILURE= 'FETCH_TESTS_FAILURE';
// export const CURRENT_SELECT_TEST= 'CURRENT_SELECT_TEST';



export const SUBMIT_TEST= 'SUBMIT_TEST';
export const TEST_SUBMIT_SUCCESS= 'TEST_SUBMIT_SUCCESS';
export const TEST_SUBMIT_FAILURE= 'TEST_SUBMIT_FAILURE';

export const FETCH_STUDENT_TEST_RESULT= 'FETCH_STUDENT_TEST_RESULT';
export const FETCH_STUDENT_TEST_SUCCESS= 'FETCH_STUDENT_TEST_SUCCESS';
export const FETCH_STUDENT_TEST_FAILURE= 'FETCH_STUDENT_TEST_FAILURE';

export const FETCH_TEACHER_CREATED_TEST= 'FETCH_TEACHER_CREATED_TEST';
export const FETCH_TEACHER_CREATED_TEST_SUCCESS= 'FETCH_TEACHER_CREATED_TEST_SUCCESS';
export const FETCH_TEACHER_CREATED_TEST_FAILURE= 'FETCH_TEACHER_CREATED_TEST_FAILURE';

//Test Created By The Teacher Which is in Trash
export const FETCH_TEACHER_CREATED_TEST_IN_BIN="FETCH_TEACHER_CREATED_TEST_IN_BIN";
export const FETCH_TEACHER_CREATED_TEST_IN_BIN_SUCCESS="FETCH_TEACHER_CREATED_TEST_IN_BIN_SUCCESS";
export const FETCH_TEACHER_CREATED_TEST_IN_BIN_FAILURE="FETCH_TEACHER_CREATED_TEST_IN_BIN_FAILURE";

//Deleting Test Data Permanently
export const DELETE_TEST_DATA="DELETE_TEST_DATA";
export const  DELETE_TEST_DATA_SUCCESS_MESSAGE="DELETE_TEST_DATA_SUCCESS_MESSAGE";
export const  DELETE_TEST_DATA_FALIURE_MESSAGE="DELETE_TEST_DATA_FALIURE_MESSAGE";

//Restoring the test data from the Trash deleted by the user
export const RESTORE_DELETE_TEST_DATA="RESTORE_DELETE_TEST_DATA";
export const RESTORE_DELETE_TEST_DATA_SUCCESS_MESSAGE="RESTORE_DELETE_TEST_DATA_SUCCESS_MESSAGE";
export const RESTORE_DELETE_TEST_DATA_FALIURE_MESSAGE="RESTORE_DELETE_TEST_DATA_FALIURE_MESSAGE";

//For Deleting The Test Data From The All Created Folder
export const TEMP_DELETE_TEST_DATA="TEMP_DELETE_TEST_DATA";
export const TEMP_DELETE_TEST_DATA_SUCCESS_MESSAGE="TEMP_DELETE_TEST_DATA_SUCCESS_MESSAGE";
export const TEMP_DELETE_TEST_DATA_FAILURE_MESSAGE="TEMP_DELETE_TEST_DATA_FAILURE_MESSAGE";




// export const FETCH_SUBMITED_TEST_ANSWER = 'FETCH_SUBMITED_TEST_ANSWER';
// export const FETCH_SUBMITED_TEST_ANSWER_SUCCESS = 'FETCH_SUBMITED_TEST_ANSWER_SUCCESS';
// export const FETCH_SUBMITED_TEST_ANSWER_FAILURE = 'FETCH_SUBMITED_TEST_ANSWER_FAILURE';












export const fetchTests = () => (
    {
    type: FETCH_TESTS_REQUEST,
  });


  
export const fetchStudentTestresult = () => (
  {
  type: FETCH_STUDENT_TEST_RESULT
});


export const fetchTestsresultSuccess = (testresult) => ({
  type: FETCH_TESTS_SUCCESS,
  payload: testresult,
});

export const fetchTestresultFailure = (error) => ({
  type: FETCH_STUDENT_TEST_FAILURE,
  payload: error,
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
  

  // export const selectedTest = (test) => ({
  //   type: CURRENT_SELECT_TEST,
  //   payload: test,
  // });

  export const submitTest = (result) => {

  return {
    type: SUBMIT_TEST,
    payload: result,
  }}

  


  // export const fetchsubmitedTestanswer = (id) => {

  //   console.log("into id", FETCH_SUBMITED_TEST_ANSWER);

  //   return {
  //     type: FETCH_SUBMITED_TEST_ANSWER,
  //     payload: id,
  //   }}
  
  export const DeleteTestDataTemp =(testId)=>({
    type: TEMP_DELETE_TEST_DATA,
    payload : testId
  })
  export const DeleteTestDataPermanently=(testId)=>({
    type:DELETE_TEST_DATA,
    payload:testId
  })
  export const RestoreDeletedData=(testId)=>({
    type: RESTORE_DELETE_TEST_DATA,
    payload : testId
  })

  export const fetchTeacherCreatedTests = () => (
    {
    type: FETCH_TEACHER_CREATED_TEST
  });

export const fetchTeacherCreatedTestsinBin=()=>({
type: FETCH_TEACHER_CREATED_TEST_IN_BIN
})
  
  