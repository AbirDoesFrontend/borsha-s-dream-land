import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import AllToys from "../Components/Home/AllToys/AllToys";
import Blog from "../Components/Home/Blog/Blog";
import AddAToy from "../Components/Home/AddAToy/AddAToy";
import Login from "../Components/Home/Login/Login";
import SignUp from "../Components/Home/SignUp/SignUp";
import MyToys from "../Components/Home/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Components/Home/Shop/ToyDetails/ToyDetails";
import ErrorPage from "../Components/Home/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <ErrorPage />,
    children : [
        {
            path : '/',
            element : <Home />
        },
        {
          path : '/alltoys',
          element : <AllToys />
        },
        {
          path : '/addtoy',
          element : <PrivateRoute><AddAToy /></PrivateRoute>
        },
        {
          path : '/blog',
          element : <Blog />
        },
        {
          path : '/login',
          element : <Login />
        },
        {
          path : '/signup',
          element : <SignUp />
        },
        {
          path : '/mytoys',
          element : <PrivateRoute><MyToys /></PrivateRoute>
        },
        {
          path : '/toys/:id',
          element : <PrivateRoute><ToyDetails /></PrivateRoute>,
        }
    ]
  },
]);

export default router;
