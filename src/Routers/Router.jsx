
import MainLayout from "../MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Menu_Page from "../Pages/Menu_Page";



 export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
       
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                errorElement: <h3>Not Found</h3>
            },
            {
                path: "/menu",
                element: <Menu_Page></Menu_Page>
            }
        ]
    }
])