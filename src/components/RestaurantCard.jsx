import { Link } from "react-router-dom";

export default function RestaurantCard({id,imgUrl, restaurantName, cuisine, rating, deliveryTime }) {
    return (
        <Link to={`/restaurants/${id}`} className="restaurant-link">
        <div className="restaurant-card">
            <img className="restaurant-logo" src={imgUrl} alt="Restaurant Logo" />
            <h3>{restaurantName}</h3>
            <div className="cusine-and-delivery">
                <p className="cusine">Cuisine: {cuisine}</p>
                <p className="delivery">Delivery Time: {deliveryTime} mins</p>

            </div>
            <p className="rating">Rating: {rating}</p>
        </div>
        </Link>
    );
}