import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/rootReducer"; // Corrected import statement
import userSaga from './sagamidalware/userSaga';
import fetchDashboardData from "./sagamidalware/DashboardSaga";
import fetchTestDataSaga from "./sagamidalware/testSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware], // Corrected middleware configuration
});

sagaMiddleware.run(userSaga);
sagaMiddleware.run(fetchDashboardData);
sagaMiddleware.run(fetchTestDataSaga);




export default store;
