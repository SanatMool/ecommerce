// combine reducer helps to combine all of the states together
import { combineReducers } from "redux";
// to persist the root reducer
import { persistReducer } from "redux-persist";
// for local storage as default storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root", // to let persist know start storing from root/start
  storage,
  whitelist: ["cart"], // containing the string name of a reducer we want to store/use
};

const rootReducer = combineReducers({
  user: userReducer, // user is being handled by firebase authentication, so no need to persist
  cart: cartReducer, // cart is being persisted
  directory: directoryReducer,
  shop: shopReducer,
});

// modified version of root reducer with persistince capability
export default persistReducer(persistConfig, rootReducer);
