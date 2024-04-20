import { FETCH_ALL_CREATERS_SUCCESS, FETCH_STUDENT_SUBCRIPTIONS_SUCCESS, FETCH_TEACHER_SUBCRIBERS_SUCCESS, SUBSCRIBE_TO_TEACHER_SUCCESS, UNSUBSCRIBE_TO_TEACHER_SUCCESS } from "../actions/subscribers";


const initialState = {
  techerData:"",
  subcribeSuccess:false,
  unsubcribeSuccess:false,
  isSubscribed : false,
  studentSubcriptions:[],
  allCreterwithSubStatus:[]
};

const subscriberReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEACHER_SUBCRIBERS_SUCCESS:
      return {
        ...state,
        techerData:action.payload.teacherdata,
        isSubscribed:action.payload.isSubscribed
      };
      case SUBSCRIBE_TO_TEACHER_SUCCESS:
        return {
          ...state,
          subcribeSuccess: !state.subcribeSuccess
        };

        case UNSUBSCRIBE_TO_TEACHER_SUCCESS:
          return {
            ...state,
            unsubcribeSuccess: !state.unsubcribeSuccess,
            isSubscribed:false
          };

          case FETCH_STUDENT_SUBCRIPTIONS_SUCCESS:
          return {
            ...state,
            studentSubcriptions: action.payload,   
          };
          case FETCH_ALL_CREATERS_SUCCESS:
            console.log(action.payload);
            return {
              ...state,
              allCreterwithSubStatus: action.payload,   
            };
    default:
      return state;
  }
};

export default subscriberReducer;
