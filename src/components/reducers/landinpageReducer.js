import { FETCH_ALL_CREATERS_FAILURE_FOR_HOMEPAGE, FETCH_ALL_CREATERS_SUCCESS_FOR_HOMEPAGE } from "../actions/landingPageActions";

const initialState = {
  allCreterData:[],
  error : ''
};

const landinpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CREATERS_SUCCESS_FOR_HOMEPAGE:
      return {
        ...state,
        allCreterData :action.payload,
      }
      case FETCH_ALL_CREATERS_FAILURE_FOR_HOMEPAGE:
        return {
          ...state,
          error :action.payload,
        }
    default:
      return state;
  }
};

export default landinpageReducer;
