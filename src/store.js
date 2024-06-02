import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./components/reducers/rootReducer"; // Corrected import statement
import userSaga from './components/sagamidalware/userSaga';
import fetchDashboardData from "./components/sagamidalware/DashboardSaga";
import fetchTestDataSaga from "./components/sagamidalware/testSaga";
import subscribersSaga from "./components/sagamidalware/subscribersSaga";
import landingpageSaga from "./components/sagamidalware/landingpageSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware], // Corrected middleware configuration
});

sagaMiddleware.run(userSaga);
sagaMiddleware.run(fetchDashboardData);
sagaMiddleware.run(fetchTestDataSaga);
sagaMiddleware.run(subscribersSaga);
sagaMiddleware.run(landingpageSaga);





export default store;
