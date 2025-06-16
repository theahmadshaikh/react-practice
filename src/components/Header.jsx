import { FaStore } from "react-icons/fa";
import NavLinks from "./NavLinks";

export default function Header() {
  const cartItemCount = 3; // TODO: replace with Redux, Zustand, Context

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="flex items-center gap-2">
        <a href="/" className="flex items-center gap-2 hover:scale-105 transition">
          <FaStore size={28} />
          <span className="text-xl font-bold hidden sm:inline">MyShop</span>
        </a>
      </div>

      <nav>
        <NavLinks cartCount={cartItemCount} />
      </nav>
    </header>
  );
}
