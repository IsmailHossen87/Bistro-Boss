import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut";
import Home from "../Components/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
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
        ]
    }
])

export default Router;