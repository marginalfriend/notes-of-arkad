import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import App from "../App";

// React Router: Router Set Up
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);