import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/authentication/SignUp/SignUp";
import Signin from "../pages/authentication/SignIn/SignIn";


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
        path:"signin",
        Component:Signin
      }
    ],
  },
]);
