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
import Cart from "./Components/Cart";
import AllUser from "./Components/AllUser";
import CreateShop from "./Components/CreateShop";
import WatchDemo from "./Components/WatchDemo";
import ManagerHome from "./Components/ManagerHome";
import AllUserForManager from "./Components/AllUserForManager";
import ListForm from "./Components/ListForm";
import ManageProduct from "./Components/ManageProduct";
import List from "./Components/List";
import UpdateItem from "./Components/UpdateItem";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: "cart",
          element: <Cart></Cart>
        },
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
        }
      ]
    }
  ]);