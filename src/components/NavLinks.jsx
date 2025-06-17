import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useDispatch } from "react-redux";
import { openCartDrawer } from "../utils/cartDrawerSlice";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Grocery", path: "/grocery" },
];

const navLinkStyle = ({ isActive }) =>
    `relative group px-1 ${isActive ? "text-yellow-400" : "text-white"
    } transition duration-200`;

export default function NavLinks({ cartCount }) {
    const dispatch = useDispatch();

    return (
        <ul className="flex space-x-6 text-lg font-medium items-center">
            {links.map(({ name, path }) => (
                <li key={path}>
                    <NavLink to={path} className={navLinkStyle}>
                        <span className="pb-1 border-b-2 border-transparent group-hover:border-yellow-300 transition-all duration-300">
                            {name}
                        </span>
                    </NavLink>
                </li>
            ))}

            {/* Cart Icon as a separate nav item, not wrapped in NavLink */}
            <li className="flex items-center">
                <button
                aria-label="cart"
                    onClick={() => dispatch(openCartDrawer())}
                    className="cursor-pointer text-white hover:text-yellow-400 transition-all duration-200"
                >
                    <CartIcon />
                </button>
            </li>

        </ul>
    );
}
