import { createBrowserRouter } from "react-router-dom";
import HomeLayout  from "../layout/HomeLayout";
import Main  from "../layout/Main";
import Home from "../pages/home/Home";
import MainPage from "../pages/main/MainPage";


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
            }
        ]
    }
])