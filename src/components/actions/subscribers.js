export const FETCH_TEACHER_SUBCRIBERS_FROM_EXAMID= 'FETCH_TEACHER_SUBCRIBERS_FROM_EXAMID';
export const FETCH_TEACHER_SUBCRIBERS_SUCCESS= 'FETCH_TEACHER_SUBCRIBERS_SUCCESS';
export const FETCH_TEACHER_SUBCRIBERS_FAILURE= 'FETCH_TEACHER_SUBCRIBERS_FAILURE';


export const SUBSCRIBE_TO_TEACHER_REQUEST = 'SUBSCRIBE_TO_TEACHER_REQUEST';
export const SUBSCRIBE_TO_TEACHER_SUCCESS = 'SUBSCRIBE_TO_TEACHER_SUCCESS';
export const SUBSCRIBE_TO_TEACHER_FAILURE = 'SUBSCRIBE_TO_TEACHER_FAILURE';



export const UNSUBSCRIBE_TO_TEACHER_REQUEST = 'UNSUBSCRIBE_TO_TEACHER_REQUEST';
export const UNSUBSCRIBE_TO_TEACHER_SUCCESS = 'UNSUBSCRIBE_TO_TEACHER_SUCCESS';
export const UNSUBSCRIBE_TO_TEACHER_FAILURE = 'UNSUBSCRIBE_TO_TEACHER_FAILURE';


export const FETCH_STUDENT_SUBCRIPTIONS = 'FETCH_STUDENT_SUBCRIPTIONS';
export const FETCH_STUDENT_SUBCRIPTIONS_SUCCESS = 'FETCH_STUDENT_SUBCRIPTIONS_SUCCESS';
export const FETCH_STUDENT_SUBCRIPTIONS_FAILURE = 'FETCH_STUDENT_SUBCRIPTIONS_FAILURE';

export const FETCH_ALL_CREATERS = 'FETCH_ALL_CREATERS';
export const FETCH_ALL_CREATERS_SUCCESS = 'FETCH_ALL_CREATERS_SUCCESS';
export const FETCH_ALL_CREATERS_FAILURE = 'FETCH_ALL_CREATERS_FAILURE';











export const fetchteacherSubscribers = (data) => (
    {
    type: FETCH_TEACHER_SUBCRIBERS_FROM_EXAMID,
    payload: data
  });

  export const subscribeToTeacher = (teacherId, studentId) => ({
    type: SUBSCRIBE_TO_TEACHER_REQUEST,
    payload: { teacherId, studentId }
  });

  export const unsubscribetoTeacher = (teacherId, studentId) => ({
    type: UNSUBSCRIBE_TO_TEACHER_REQUEST,
    payload: { teacherId, studentId }
  });


  export const fetchStudentSubcriptions = () => ({
    type: FETCH_STUDENT_SUBCRIPTIONS
  });


  export const fetchAllCretater = () => ({
    type: FETCH_ALL_CREATERS
  });