import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./app/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
