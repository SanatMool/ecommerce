import React from "react";
import ReactDOM from "react-dom";
// provides all of the funtionality related to routing
import { BrowserRouter } from "react-router-dom";
// Provider is the component we get from react-redux. Parent of everything inside our application.
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* wrapping app with persistgate so that our app has access to persistance flow */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
