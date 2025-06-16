import { useDispatch, useSelector } from "react-redux";
import { closeCartDrawer } from "../utils/cartDrawerSlice";
import { FaTimes } from "react-icons/fa";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.cartDrawer.isCartDrawerOpen);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isDrawerOpen ? "opacity-100 pointer-events-auto backdrop-blur-sm" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute right-0 top-0 w-80 h-full 
          bg-white text-gray-900 shadow-lg
          dark:bg-gray-900 dark:text-white dark:shadow-gray-800
          transition-transform transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 relative">
          <h2 className="text-xl font-bold mb-4">Cart</h2>

          {/* Close Button */}
          <button
            onClick={() => dispatch(closeCartDrawer())}
            className="absolute top-4 right-4 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-xl"
            aria-label="Close cart drawer"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}
