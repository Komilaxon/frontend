import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./style/style.css";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </Provider>
);
