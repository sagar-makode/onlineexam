import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer"; // Corrected file name
import dashboardReducer from "./dashboardReducer";
import testReducer from "./testReducer";
import subscriberReducer from "./subscriberReducer";

const rootReducer = combineReducers({
  user: userReducer,
  dashboard : dashboardReducer,
  tests : testReducer,
  teechernamesubscriber : subscriberReducer


  
});

export default rootReducer;
