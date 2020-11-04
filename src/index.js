import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import getUrls from "./actions/getUrls";

const Middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...Middlewares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getUrls("cat"));
