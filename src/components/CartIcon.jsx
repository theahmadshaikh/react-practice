import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function CartIcon() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="relative">
      <FaShoppingCart size={22} />
      {cartQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartQuantity}
        </span>
      )}
    </div>
  );
}
