import { createBrowserRouter } from "react-router-dom";
import HomeLayout  from "../layout/HomeLayout";
import Main  from "../layout/Main";
import Home from "../pages/home/Home";
import MainPage from "../pages/main/MainPage";
import Boards from "../pages/main/Boards";
import History from "../pages/main/History";
import TaskVisible from "../pages/main/TaskVisible";
import Register from "../pages/home/RegisterPage";
import SignInPage from "../pages/home/SignInPage";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/error/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/signin",
        element: <SignInPage/>,
    },
    {
        path: "/profile",
        element: <div className="text-center font-semibold text-3xl leading-2 mt-20">Your profiile Details Comming Soon. Thanks for your click this URL</div>,
    },
    {
        path: "main",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/main",
                element: <PrivateRoutes><MainPage/></PrivateRoutes>
            },
            {
                path:"board",
                element: <Boards/>
            },
            {
                path:"history",
                element: <History/>
            },
            {
                path:"taskvisile",
                element: <TaskVisible/>
            },
        ]
    }
])