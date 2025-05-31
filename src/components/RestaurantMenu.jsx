import { useMenu } from "../hooks/useMenu";
import "./RestaurantMenu.css"; 
import MenuSection from "./MenuSection";
import MenuCardShimmer from "./MenuCardShimmer";
import { useParams } from "react-router-dom";
import { getRestaurantMenuURL } from "../utils/constant";
import { use } from "react";



export const RestaurantMenu = () => {
    const {id} = useParams()
    const API_URL = getRestaurantMenuURL({id,lat:"12.9352403",lng:"77.624532"});
    const { menu, loading } = useMenu(API_URL);

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