import { FETCH_ALL_CREATERS_FAILURE_FOR_HOMEPAGE, FETCH_ALL_CREATERS_FOR_HOMEPAGE, FETCH_ALL_CREATERS_SUCCESS_FOR_HOMEPAGE } from "../actions/landingPageActions";

const initialState = {
  allCreterData:[],
  error : '',
  loadingforhome : false
};

const landinpageReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_ALL_CREATERS_FOR_HOMEPAGE:
      return {
        ...state,
        loadingforhome :true,
      }
    case FETCH_ALL_CREATERS_SUCCESS_FOR_HOMEPAGE:
      return {
        ...state,
        allCreterData :action.payload,
        loadingforhome : false
      }
      case FETCH_ALL_CREATERS_FAILURE_FOR_HOMEPAGE:
        return {
          ...state,
          error :action.payload,
          loadingforhome : false
        }

        
    default:
      return state;
  }
};

export default landinpageReducer;
