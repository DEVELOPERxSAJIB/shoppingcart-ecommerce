import Layout from "../components/Layouts/Layout";
import Dashboard from "../pages/Admin/Dashboard";
import ProductList from "../pages/Admin/ProductList";
import Logout from "../pages/Auth/Logout";
import ConfirmOrder from "../pages/ConfrimOrder/ConfirmOrder";
import ShippingInfo from "../pages/ShippingInfo/ShippingInfo";
import ChangePassword from "../pages/User/ChangePassword";
import MyOrders from "../pages/User/MyOrders";
import Profile from "../pages/User/Profile";
import UpdateProfile from "../pages/User/UpdateProfile";
import PrivateGuards from "./PrivateGuards";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../pages/Payment/Payment";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import SingleOrder from "../pages/User/SingleOrder";
import CreateProduct from "../pages/Admin/CreateProduct";
import OrderList from "../pages/Admin/OrderList";
import OrderDetails from "../pages/Admin/OrderDetails";
import UserList from "../pages/Admin/UserList";
import UserDetails from "../pages/Admin/UserDetails";
import ReviewsList from "../pages/Admin/ReviewsList";
import ProductDetails from "../pages/Admin/ProductDetails";
import Cart from "../pages/Cart/Cart";

const stripePromise = loadStripe(
  "pk_test_51OJK2mC0uzty5a6aCvyDcWDcXB01RJgae6EGrqNr6oMuD8DFemS56xiyQZHQHlllOhGPp70dIEvWS0RTzXwzX1KU00oDtEJ7cO"
);

const user = JSON.parse(localStorage.getItem("user"));

const privateRoutes = [
  {
    element: (
      <Elements stripe={stripePromise}>
        <Layout />
      </Elements>
    ),
    children: [
      {
        element: <PrivateGuards />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/update-profile",
            element: <UpdateProfile />,
          },
          {
            path: "/my-orders",
            element: <MyOrders />,
          },
          {
            path: "/order/:id",
            element: <SingleOrder />,
          },
          {
            path: "/shipping-info",
            element: <ShippingInfo />,
          },
          {
            path: "/order/confirm",
            element: <ConfirmOrder />,
          },
          {
            path: "/confirm/payment",
            element: <Payment />,
          },
          {
            path: "/success",
            element: <OrderSuccess />,
          },
          {
            path: "/change-password",
            element: <ChangePassword />,
          },
          {
            path: user?.role === "admin" ? "/dashboard" : null,
            element: user?.role === "admin" ? <Dashboard /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/products" : null,
            element: user?.role === "admin" ? <ProductList /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/create-product" : null,
            element: user?.role === "admin" ? <CreateProduct /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/update-product/:id" : null,
            element: user?.role === "admin" ? <ProductDetails /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/orders" : null,
            element: user?.role === "admin" ? <OrderList /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/orders/:id" : null,
            element: user?.role === "admin" ? <OrderDetails /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/users" : null,
            element: user?.role === "admin" ? <UserList /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/users/:id" : null,
            element: user?.role === "admin" ? <UserDetails /> : null,
          },
          {
            path: user?.role === "admin" ? "/admin/reviews" : null,
            element: user?.role === "admin" ? <ReviewsList /> : null,
          },
        ],
      },
    ],
  },
];

export default privateRoutes;
