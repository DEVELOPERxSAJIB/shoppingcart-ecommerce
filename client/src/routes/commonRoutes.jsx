import Layout from "../components/Layouts/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Search from "../pages/Search/Search";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

export const commonRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:keyword",
        element: <Search />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
];
