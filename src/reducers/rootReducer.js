import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer"; // Corrected file name

const rootReducer = combineReducers({
  user: userReducer,
  
});

export default rootReducer;
