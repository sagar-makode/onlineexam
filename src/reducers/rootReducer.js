import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer"; // Corrected file name
import dashboardReducer from "./dashboardReducer";
import testReducer from "./testReducer";
import subscriberReducer from "./subscriberReducer";

const rootReducer = combineReducers({
  user: userReducer,
  dashboard : dashboardReducer,
  tests : testReducer,
  subcriptiondata : subscriberReducer


  
});

export default rootReducer;
