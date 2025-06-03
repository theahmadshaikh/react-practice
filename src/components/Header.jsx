import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

export default function Header() {
  const navLinkStyle = ({ isActive }) =>
    `relative group px-1 ${
      isActive ? "text-yellow-400" : "text-white"
    } transition duration-200`;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="flex items-center">
        <a href="/">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm hover:scale-105 transition"
          />
        </a>
      </div>
      <nav>
        <ul className="flex space-x-6 text-lg font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Grocery", path: "/grocery" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={navLinkStyle}>
                <span className="pb-1 border-b-2 border-transparent group-hover:border-yellow-300 transition-all duration-300">
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
