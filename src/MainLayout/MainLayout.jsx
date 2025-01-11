import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import AuthProvider from "../Providers/Provider";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <AuthProvider>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </AuthProvider>
        </div>
    );
};

export default MainLayout;