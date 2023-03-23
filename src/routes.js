import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import Fullpage from "./layouts/Fullpage";
// Route Views

import Register from "./views/Register";
import Login from "./views/Login";
import CreateContract from "./views/CreateContract";
import contracts from "./views/contracts";
import views from "./views/Views";
import Cookie from "js-cookie";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />,
  },
  {
    path: "/register",
    layout: Fullpage,
    component: Register,
  },
  {
    path: "/create-a-contract",
    layout: DefaultLayout,
    component: CreateContract,
  },
  {
    path: "/contracts",
    layout: DefaultLayout,
    component: contracts,
  },
  {
    path: "/view",
    layout: DefaultLayout,
    component: views,
  },
  {
    path: "/login",
    layout: Fullpage,
    component: Login,
  },
];
