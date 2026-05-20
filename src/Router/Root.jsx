import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import Third from "../Layout/Third";
import AddServices from "../pages/Add-Services/AddServices";
import Overview from "../pages/Admin/components/Overview";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOutBox/CheckOut";
import Details from "../pages/Home/Display-services/Details";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import Profile from "../pages/Profile/Profile";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import PrivateRoot from "./PrivateRoot";
import AdminProtectedRoot from "./AdminProtectedRoot";
import AddService from "../pages/Admin/components/AddService";
const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/custom-package/:id",
          element: (
            <PrivateRoot>
              <Details />
            </PrivateRoot>
          ),
          loader: ({ params }) =>
            fetch(
              `https://adventa-server.vercel.app/custom-service/${params.id}`,
            ),
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/:id",
          element: <ServiceDetails />,
          loader: ({ params }) =>
            fetch(`https://adventa-server.vercel.app/services/${params.id}`),
        },

        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/custom-packages",
          element: <Services />,
        },
        {
          path: "/my-reviews",
          element: (
            <PrivateRoot>
              <MyReviews />
            </PrivateRoot>
          ),
        },
        {
          path: "/add-service",
          element: (
            <PrivateRoot>
              <AddServices />
            </PrivateRoot>
          ),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoot>
              <Profile />
            </PrivateRoot>
          ),
        },
        {
          path: "/services/shopping-cart/:id",
          element: (
            <PrivateRoot>
              <ShoppingCart />
            </PrivateRoot>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <Secondary />,
      children: [
        {
          path: "/services/check-out/:id",
          element: (
            <PrivateRoot>
              <CheckOut />
            </PrivateRoot>
          ),
          loader: ({ params }) =>
            fetch(`https://adventa-server.vercel.app/services/${params.id}`),
        },
      ],
    },
    {
      path: "/",
      element: <Third />,
      children: [
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <PrivateRoot>
          <AdminLayout />
        </PrivateRoot>
      ),
      children: [
        {
          path: "/admin",
          element: (
            <AdminProtectedRoot>
              <Overview />
            </AdminProtectedRoot>
          ),
        },
        {
          path: "/admin/overview",
          element: (
            <AdminProtectedRoot>
              <Overview />
            </AdminProtectedRoot>
          ),
        },
        {
          path: "/admin/services",
          element: (
            <AdminProtectedRoot>
              <Overview />
            </AdminProtectedRoot>
          ),
        },
        {
          path: "/admin/add-service",
          element: (
            <AdminProtectedRoot>
              <AddService />
            </AdminProtectedRoot>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Root;
