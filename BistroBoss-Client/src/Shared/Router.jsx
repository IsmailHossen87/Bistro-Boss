import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut";
import Home from "../Components/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            {
                path:'order',
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
        ]
    }
])

export default Router;