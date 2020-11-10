import { createStore, applyMiddleware } from "redux";
// redux persist lets us leverage local storage
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted(hold) version of store
export const persistor = persistStore(store);

export default { store, persistor };
