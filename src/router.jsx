import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WishList from "./pages/wishList";
import Cart from "./pages/Cart";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
