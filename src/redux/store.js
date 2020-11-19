import { createStore, applyMiddleware } from "redux";
// redux persist lets us leverage local storage
import { persistStore } from "redux-persist";

import logger from "redux-logger";
// all thunks are, is a action creator that returns a function that gets the dispatch
// similar to mapDispatchToProps

// redux-thunk ignores action object, only catches functions and allows dispatch to be used
// import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk];

const middlewares = [sagaMiddleware];

// create-react-app gives access to process.env.NODE_ENV
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// persisted(hold) version of store
export const persistor = persistStore(store);

export default { store, persistor };
