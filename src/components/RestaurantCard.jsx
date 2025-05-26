
export default function RestaurantCard({imgUrl, restaurantName, cuisine, rating, deliveryTime }) {
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={imgUrl} alt="Restaurant Logo" />
            <h3>{restaurantName}</h3>
            <div className="cusine-and-delivery">
                <p className="cusine">Cuisine: {cuisine}</p>
                <p className="delivery">Delivery Time: {deliveryTime} mins</p>

            </div>
            <p className="rating">Rating: {rating}</p>
        </div>
    );
}