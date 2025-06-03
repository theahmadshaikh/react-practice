import { Link } from "react-router-dom";

export default function RestaurantCard({ id, imgUrl, restaurantName, cuisine, rating, deliveryTime }) {
  return (
    <Link to={`/restaurants/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-xl duration-300 transition-all">
        <img
          className="w-full h-60 object-cover"
          src={imgUrl}
          alt={`${restaurantName} Logo`}
        />
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">{restaurantName}</h3>
          <p className="text-sm text-gray-600">Cuisine: {cuisine}</p>
          <p className="text-sm text-gray-600">Delivery Time: {deliveryTime} mins</p>
          <p className="text-sm font-medium text-yellow-600">⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
}
