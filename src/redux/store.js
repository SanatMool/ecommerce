import { createStore, applyMiddleware } from "redux";
// redux persist lets us leverage local storage
import { persistStore } from "redux-persist";

import logger from "redux-logger";
// all thunks are, is a action creator that returns a function that gets the dispatch
// similar to mapDispatchToProps
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

// create-react-app gives access to process.env.NODE_ENV
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted(hold) version of store
export const persistor = persistStore(store);

export default { store, persistor };
