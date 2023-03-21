import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import Fullpage from "./layouts/Fullpage";
// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import CreateContract from "./views/CreateContract";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import generate from "./api/generate";
import Register from "./views/Register";
import Login from "./views/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />,
  },
  {
    path: "/register",
    layout: Fullpage,
    component: Register,
  },
  {
    path: "/login",
    layout: Fullpage,
    component: Login,
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview,
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite,
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
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview,
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables,
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts,
  },
  {
    path: "/api",
    layout: DefaultLayout,
    component: generate,
  },
];
