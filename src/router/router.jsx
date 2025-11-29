import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/authentication/SignUp/SignUp";
import Signin from "../pages/authentication/SignIn/SignIn";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../components/overview/Overview";
import AllUsers from "../components/AllUsers/AllUsers";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AdminRoute from "../routes/adminRoute";
import Forbidden from "../pages/forbidden/Forbidden";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "signin",
        Component: Signin,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<AdminRoute><DashboardLayout/></AdminRoute>,
   
    children: [
      {
        index: true,
        Component: Overview,
      },
      {
        path: "allusers",
        Component: AllUsers,
      },
    ],
  },
  {
    path: "/forbidden",
    Component:Forbidden
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
