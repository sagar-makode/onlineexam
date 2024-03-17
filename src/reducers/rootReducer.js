import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer"; // Corrected file name
import dashboardReducer from "./dashboardReducer";
import testReducer from "./testReducer";

const rootReducer = combineReducers({
  user: userReducer,
  dashboard : dashboardReducer,
  tests : testReducer

  
});

export default rootReducer;
