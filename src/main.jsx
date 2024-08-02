import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/login";
import Index from "./pages/index";
import Header from "./base/header";
import ReksaDana from "./pages/report-reksadana";
import SettingUser from "./pages/setting-user";
import SettingMenu from "./pages/setting-menu";
import NotFound from "./pages/404";
import Test from "./pages/test";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header>
        <Index />
      </Header>
    ),
    errorElement: (
      <Header>
        <NotFound />
      </Header>
    ),
  },
  {
    path: "/index",
    element: (
      <Header>
        <Index />
      </Header>
    ),
  },
  {
    path: "/report-reksadana",
    element: (
      <Header>
        <ReksaDana />
      </Header>
    ),
  },
  {
    path: "/setting-user",
    element: (
      <Header>
        <SettingUser />
      </Header>
    ),
  },
  {
    path: "/setting-menu",
    element: (
      <Header>
        <SettingMenu />
      </Header>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
