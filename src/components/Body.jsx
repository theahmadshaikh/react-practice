import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../utils/mockdata";
import { useState } from "react";

export default function Body() {
    const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST);
    return (
        <main className="body">
            <div className="search">
               <button className="btn btn-filter" onClick={()=>{setRestaurantList(restaurantList.filter(restaurant=>restaurant.rating>4.0))}}>Filter</button>
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        imgUrl={restaurant.imageUrl}
                        restaurantName={restaurant.restaurantName}
                        cuisine={restaurant.cuisine}
                        rating={restaurant.rating}
                        deliveryTime={restaurant.deliveryTime}
                    />
                ))}
            </div>
        </main>
    );
}