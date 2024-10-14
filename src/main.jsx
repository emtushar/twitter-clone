import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Feed,
  Profile,
  Login,
  Bookmark,
  Message,
  Explore,
  Notifications,
  Settings,
} from "./components/index.js";
import AuthLayout from "./components/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            <Feed />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout>
            <Profile />
          </AuthLayout>
        ),
      },
      {
        path: "/bookmark",
        element: (
          <AuthLayout>
            <Bookmark />
          </AuthLayout>
        ),
      },
      {
        path: "/notifications",
        element: (
          <AuthLayout>
            <Notifications />
          </AuthLayout>
        ),
      },
      {
        path: "/message",
        element: (
          <AuthLayout>
            <Message />
          </AuthLayout>
        ),
      },
      {
        path: "/settings",
        element: (
          <AuthLayout>
            <Settings />
          </AuthLayout>
        ),
      },
      {
        path: "/explore",
        element: (
          <AuthLayout>
            <Explore />
          </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
