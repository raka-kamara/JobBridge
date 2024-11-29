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
import AdminRoutes from "./AdminRoutes";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AddNewTask from "../pages/Dashboard/TaskCreator/AddNewTask";
import MyTasks from "../pages/Dashboard/TaskCreator/MyTasks";
import PurchaseCoin from "../pages/Dashboard/TaskCreator/PurchaseCoin";
import TaskCreatorHome from "../pages/Dashboard/TaskCreator/TaskCreatorHome";
import PaymentHistory from "../pages/Dashboard/TaskCreator/PaymentHistory";
import TaskList from "../pages/Dashboard/Worker/TaskList";
import WorkerHome from "../pages/Dashboard/Worker/WorkerHome";
import TaskDetails from "../pages/Dashboard/TaskCreator/TaskDetails";
import Payment from "../pages/Dashboard/Payment";

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
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      
      // admin routes
      {
        path:'allUsers',
        element:<AdminRoutes><AllUsers/></AdminRoutes>
      },
      {
        path:'adminHome',
        element:<AdminRoutes><AdminHome/></AdminRoutes>
      },

      //Worker Home
      {
        path:'workerHome',
        element:<WorkerHome/>
      }, 
      {
        path:'taskList',
        element:<TaskList/>
      }, 

      // TaskCreator 
      {
        path:'addNewTask',
        element:<AddNewTask/>
      },
      {
        path:'myTasks',
        element:<MyTasks/>
      },
      {
        path:'taskDetails/:id',
        element:<TaskDetails/>,
        loader: ({params}) => fetch(`https://pico-workers-server.vercel.app/tasks/${params.id}`)
      },
      {
        path:'purchaseCoin',
        element:<PurchaseCoin/>
      },
      {
        path:'taskCreatorHome',
        element:<TaskCreatorHome/>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory/>
      },
      {
        path:'payment',
        element:<Payment/>
      },
    ]
   }
  ])