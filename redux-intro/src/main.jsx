import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
// REDUX TOOLKIT
import store from "./StoreReduxToolkit.js";

// Redux
// import store from "./Storev1.js";

// store.dispatch( { type:"account/deposit", payload: 250 } )
// console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
