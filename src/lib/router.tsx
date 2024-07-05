import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import App from "../pages/App";
import Login from "../pages/Login";

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
	{
		path: "/login",
		element: <Login />
	}
]);