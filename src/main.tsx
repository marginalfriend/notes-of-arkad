import React from "react";
import ReactDOM from "react-dom/client";
import "./app/globals.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
