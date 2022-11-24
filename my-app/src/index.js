import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/State";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
// let rerenderEntireThree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
        />
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
