import Layout from "../components/Layouts/Layout";
import PublicGuards from "./PublicGuards";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import NotFound from "../pages/NotFound/NotFound";


export const publicRoutes = [
  {
    element: <Layout />,
    children: [
      {
        element: <PublicGuards />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/api/v1/user/activation/:token",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "/api/users/reset-password/:token",
            element: <ResetPassword />,
          },
        ],
      },
    ],
  },
];
