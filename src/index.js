import React from "react";
import ReactDOM from "react-dom";
// provides all of the funtionality related to routing
import { BrowserRouter } from "react-router-dom";
// Provider is the component we get from react-redux. Parent of everything inside our application.
import { Provider } from "react-redux";

import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
