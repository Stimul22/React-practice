import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import store from "./redux/State";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let rerenderEntireThree = (state) => {
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// };

// rerenderEntireThree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireThree(state);
// });

// reportWebVitals();
