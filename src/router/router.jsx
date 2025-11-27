import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/AuthLayout";
import SignUp from "../pages/authentication/SignUp/SignUp";

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
        path: "singup",
        Component: SignUp,
      },
    ],
  },
]);
