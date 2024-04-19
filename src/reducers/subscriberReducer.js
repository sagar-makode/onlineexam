import { FETCH_TEACHER_SUBCRIBERS_SUCCESS, SUBSCRIBE_TO_TEACHER_SUCCESS, UNSUBSCRIBE_TO_TEACHER_SUCCESS } from "../actions/subscribers";


const initialState = {
  techerData:"",
  subcribeSuccess:false,
  unsubcribeSuccess:false,
  isSubscribed : false
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
    default:
      return state;
  }
};

export default subscriberReducer;
