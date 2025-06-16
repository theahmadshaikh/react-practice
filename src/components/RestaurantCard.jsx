import { Link } from "react-router-dom";

export default function RestaurantCard({ id, imgUrl, restaurantName, cuisine, rating, deliveryTime }) {
  return (
    <Link to={`/restaurants/${id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-lg hover:scale-105 hover:shadow-xl duration-300 transition-all">
        <img
          className="w-full h-60 object-cover"
          src={imgUrl}
          alt={`${restaurantName} Logo`}
        />
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{restaurantName}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Cuisine: {cuisine}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Delivery Time: {deliveryTime} mins</p>
          <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
}

export const withPromoRestaurantCard = (WrappedComponent) => {
  return function PromoRestaurantCard(props) {
    return (
      <div className="relative  rounded-adow-lg mb-4 ">
        {/* Ribbon */}
        <div className="absolute top-0 left-0 z-20">
          <div className="relative w-20 text-center text-xs font-bold text-white bg-yellow-500  shadow-md py-1">
            FEATURED
          </div>
        </div>

        {/* Card */}
        <WrappedComponent {...props} />
      </div>
    );
  };
};


