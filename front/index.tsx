import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./src/components/Root/Root";
import Register from "./src/components/Register/Register";
import Login from "./src/components/Login/Login";
import "./styles/reset.scss";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
