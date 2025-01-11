import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <nav>navber</nav>
            <Outlet></Outlet>
            <footer>Footer</footer>
        </div>
    );
};

export default MainLayout;