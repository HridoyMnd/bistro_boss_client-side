import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start flex flex-col items-start">
                    <h2 className="text-2xl font-extrabold">BISTRO BOSS</h2>
                    <h4 className="text-xl font-semibold lea ">Restaurant</h4>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
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
                        <li><a>Item 1</a></li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;