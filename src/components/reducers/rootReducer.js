import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer"; // Corrected file name
import dashboardReducer from "./dashboardReducer";
import testReducer from "./testReducer";
import subscriberReducer from "./subscriberReducer";
import landinpageReducer from "./landinpageReducer";

const rootReducer = combineReducers({
  user: userReducer,
  dashboard : dashboardReducer,
  tests : testReducer,
  subcriptiondata : subscriberReducer,
  landingpagedata : landinpageReducer



  
});

export default rootReducer;
