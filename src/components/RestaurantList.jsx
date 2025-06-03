import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

export default function RestaurantList({ data = [], isLoading }) {
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {Array(5).fill(0).map((_, i) => (
          <ShimmerRestaurantCard key={i} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No restaurants found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {data.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          imgUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
          restaurantName={restaurant.name}
          cuisine={restaurant.cuisines.join(", ")}
          rating={restaurant.avgRating}
          deliveryTime={restaurant.sla.deliveryTime}
        />
      ))}
    </div>
  );
}
