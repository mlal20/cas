import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import CreateContract from "./views/CreateContract";
import Errors from "./views/Errors";
import generate from "./api/generate";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/create-a-contract" />,
  },

  {
    path: "/create-a-contract",
    layout: DefaultLayout,
    component: CreateContract,
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors,
  },

  {
    path: "/api",
    layout: DefaultLayout,
    component: generate,
  },
];
