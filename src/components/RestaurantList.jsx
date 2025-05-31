import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

export default function RestaurantList({ data = [], isLoading }) {
  if (isLoading) {
    return (
      <div className="restaurant-container">
        {Array(5).fill(0).map((_, i) => (
          <ShimmerRestaurantCard key={i} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return <p>No restaurants found.</p>;
  }

  return (
    <div className="restaurant-container">
      {data.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
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
