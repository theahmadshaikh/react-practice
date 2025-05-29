import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../utils/mockdata";
import { useEffect, useState } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

export default function Body() {
    const [restaurantList, setRestaurantList] = useState([]);
    useEffect(() => {
        fetchRestaurantList();

    }, [])

    const fetchRestaurantList = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2122949&lng=72.97716609999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const data = await response.json()
        const restaurantCards = data.data.cards.filter(
            card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );

        const extracted = restaurantCards.map(card => card.card.card.info);
        setRestaurantList(extracted);

    }
    return (
        <main className="body">
            <div className="search">
                <button className="btn btn-filter" onClick={() => { setRestaurantList(restaurantList.filter(restaurant => restaurant.avgRating > 4.4)) }}>Filter</button>
            </div>
            <div className="restaurant-container">
                {restaurantList.length==0?Array(5).fill(0).map((_, i) => <ShimmerRestaurantCard key={i} />):restaurantList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        imgUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
                        restaurantName={restaurant.name}
                        cuisine={restaurant.cuisines.join(", ")}
                        rating={restaurant.avgRating}
                        deliveryTime={restaurant.deliveryTime}
                    />
                ))}
            </div>
        </main>
    );
}