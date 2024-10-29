import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";

  export const router = createBrowserRouter([{
    path: "/",
    element: <Main/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
    ]
   },
   {
    path: 'dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'allUsers',
        element:<AllUsers/>
      }
    ]
   }
  ])