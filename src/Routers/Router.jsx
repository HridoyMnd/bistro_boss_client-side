
import MainLayout from "../MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";


 export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            }
        ]
    }
])