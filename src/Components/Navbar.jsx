import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start flex flex-col items-start">
                <h2 className="text-2xl font-extrabold">BISTRO BOSS</h2>
                <h4 className="text-xl font-semibold lea ">Restaurant</h4>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <Link className="px-4 text-lg font-medium py-2" to="/">Home</Link>
                    <Link className="px-4 text-lg font-medium py-2" to="/menu">Menu</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBarsStaggered />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 text-center w-52 p-2 shadow">
                        <Link className="px-4 text-lg font-medium py-2" to="/">Home</Link>
                        <Link className="px-4 text-lg font-medium py-2" to="/menu">Menu</Link>
                    </ul>
                </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;