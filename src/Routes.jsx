import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";

import AllUser from "./Components/AllUser";
import CreateShop from "./Components/CreateShop";
import WatchDemo from "./Components/WatchDemo";
import ManagerHome from "./Components/ManagerHome";
import AllUserForManager from "./Components/AllUserForManager";
import ListForm from "./Components/ListForm";
import ManageProduct from "./Components/ManageProduct";
import List from "./Components/List";
import UpdateItem from "./Components/UpdateItem";
import SalesColection from "./Components/SalesColection";
import ManageShop from "./Components/ManageShop";
import SaleSummary from "./Components/SaleSummary";
import CheckOut from "./Components/CheckOut";
import Payment from "./Components/Payment";
import Contact from "./Components/Contact";
import DoPayment from "./Components/DoPayment";
import AdminHome from "./Components/AdminHome";

import MyShop from "./Components/MyShop";
import UserHome from "./Components/UserHome";
import ErrorPage from "./Components/ErrorPage";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/createShop',
          element:<PrivateRoute><CreateShop></CreateShop></PrivateRoute>
        },
        {
          path:'/watchDemo',
          element:<WatchDemo></WatchDemo>
        },
        {
          path:'/list',
          element:<List></List>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
       
        {
        path:'managerHome',
        element:<ManagerHome></ManagerHome>
        },
        {
          path: "allUsers",
          element: <AllUser></AllUser>
        },
        {
          path:"allUserForManager",
          element:<AllUserForManager></AllUserForManager>
        },
        {
          path:"listform",
          element:<ListForm></ListForm>
        },
        {
          path:'updateItem/:id',
          element:<UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`http://localhost:5000/list/${params.id}`)
        },
        {
          path:"manageProduct",
          element:<ManageProduct></ManageProduct>
        },
        {
          path:"salesColection",
          element:<SalesColection></SalesColection>
        },
        {
          path:"manageShop",
          element:<ManageShop></ManageShop>
        },
        {
          path:"saleSummary",
          element:<SaleSummary></SaleSummary>
        },
        {
          path:"checkOut",
          element:<CheckOut></CheckOut>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:"doPayment",
          element:<DoPayment></DoPayment>
        },
        {
          path:"adminHome",
          element:<AdminHome></AdminHome>
        },
        {
          path:"userHome",
          element:<UserHome></UserHome>
        },
        {
          path:"myShop",
          element:<MyShop></MyShop>
        },
        
      ]
    }
  ]);