import { useMenu } from "../hooks/useMenu";
import "./RestaurantMenu.css"; 
import MenuSection from "./MenuSection";
import MenuCardShimmer from "./MenuCardShimmer";


export const RestaurantMenu = ({ apiUrl }) => {
  const { menu, loading } = useMenu(apiUrl);

  if (loading) if (loading) {
    return (
      <div className="restaurant-menu">
        {[...Array(5)].map((_, i) => (
          <MenuCardShimmer key={i} />
        ))}
      </div>
    );
  };

  return (
    <div className="restaurant-menu">
      {menu.map(section => (
        <MenuSection key={section.category} section={section} />
      ))}
    </div>
  );
};