import { useMenu } from "../hooks/useMenu";
import MenuSection from "./MenuSection";
import MenuCardShimmer from "./MenuCardShimmer";
import { useParams } from "react-router-dom";
import { getRestaurantMenuURL } from "../utils/constant";

export const RestaurantMenu = () => {
  const { id } = useParams();

  const API_URL = getRestaurantMenuURL({
    id,
    lat: "12.9352403",
    lng: "77.624532",
  });

  const { menu, loading } = useMenu(API_URL);
  console.log("Menu Data:", menu);

  if (loading) {
    return (
      <div className="restaurant-menu p-4 max-w-5xl mx-auto space-y-6">
        {[...Array(5)].map((_, i) => (
          <MenuCardShimmer key={i} />
        ))}
      </div>
    );
  }

  if (!menu || menu.length === 0) {
    return (
      <div className="p-6 max-w-5xl mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>No menu available for this restaurant.</p>
      </div>
    );
  }

  return (
    <div className="restaurant-menu mt-4 p-4 max-w-5xl mx-auto space-y-6 bg-white dark:bg-gray-900">
      {menu.map((section) => (
        <MenuSection key={section.category} section={section} />
      ))}
    </div>
  );
};
