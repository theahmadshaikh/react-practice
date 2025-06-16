import { useDispatch, useSelector } from "react-redux";
import { closeCartDrawer } from "../utils/cartDrawerSlice";
import { removeItemFromCart, clearCart } from "../utils/cartSlice";
import { FaTimes, FaTrash } from "react-icons/fa";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.cartDrawer.isCartDrawerOpen);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleRemoveItem = (id) => dispatch(removeItemFromCart(id));
  const handleClearCart = () => dispatch(clearCart());

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isDrawerOpen ? "opacity-100 pointer-events-auto backdrop-blur-sm" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute right-0 top-0 w-96 max-w-full h-full 
          bg-white text-gray-900 shadow-lg
          dark:bg-gray-900 dark:text-white dark:shadow-gray-800
          transition-transform transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 h-full flex flex-col relative">
          {/* Header */}
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <button
            onClick={() => dispatch(closeCartDrawer())}
            className="absolute top-4 right-4 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-xl"
            aria-label="Close cart drawer"
          >
            <FaTimes />
          </button>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1 mt-2">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center mt-10">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start border-b pb-4 border-gray-200 dark:border-gray-700"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover border"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-md font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          ₹{item.price} × {item.quantity}
                        </p>
                        <p className="text-sm font-medium mt-1 text-green-700 dark:text-green-400">
                          ₹{item.totalPrice}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                        aria-label="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700 space-y-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Total Items: <strong>{totalQuantity}</strong>
              </p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                Total: ₹{totalPrice}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleClearCart}
                  className="w-full text-sm py-2 rounded-md bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition"
                >
                  Clear Cart
                </button>
                <button
                  className="w-full text-sm py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
