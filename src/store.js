import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/rootReducer"; // Corrected import statement
import userSaga from './sagamidalware/userSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware], // Corrected middleware configuration
});

sagaMiddleware.run(userSaga);


export default store;
