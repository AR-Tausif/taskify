import { createBrowserRouter } from "react-router-dom";
import HomeLayout  from "../layout/HomeLayout";
import Main  from "../layout/Main";
import Home from "../pages/home/Home";
import MainPage from "../pages/main/MainPage";
import Boards from "../pages/main/Boards";
import History from "../pages/main/History";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
    {
        path: "main",
        element: <Main/>,
        children: [
            {
                path: "/main",
                element: <MainPage/>
            },
            {
                path:"board",
                element: <Boards/>
            },
            {
                path:"history",
                element: <History/>
            },
        ]
    }
])