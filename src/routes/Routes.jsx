import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CheckOut from "../pages/checkout/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'checkout/:id',
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoutes>
          <Bookings></Bookings>
        </PrivateRoutes>
      }
    ]
  },
]);
export default router;