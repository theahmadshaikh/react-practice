import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/"><img src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg" alt="Logo" />
                </a>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li className="nav-links"><a href="#home">Home</a></li>
                    <li className="nav-links"><a href="#about">About</a></li>
                    <li className="nav-links"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

// RestaurantCard Component
function RestaurantCard({ restaurantName, cuisine, rating, deliveryTime }) {
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src="https://b.zmtcdn.com/data/reviews_photos/b7b/4b2df879862186a6fc78c5c8638e4b7b_1556885016.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="Restaurant Logo" />
            <h3>{restaurantName}</h3>
            <div className="cusine-and-delivery">
                <p className="cusine">Cuisine: {cuisine}</p>
                <p className="delivery">Delivery Time: {deliveryTime} mins</p>

            </div>
            <p className="rating">Rating: 4.5/5</p>
        </div>
    );
}

// Body Component
function Body() {
    return (
        <main className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard restaurantName="Meghana foods" cuisine="biryani, chicken biryani, veg biryani" rating="4.5" deliveryTime="28" />
                <RestaurantCard restaurantName="Meghana foods" cuisine="biryani, chicken biryani, veg biryani" rating="4.5" deliveryTime="28" />
                <RestaurantCard restaurantName="Meghana foods" cuisine="biryani, chicken biryani, veg biryani" rating="4.5" deliveryTime="28" />
                <RestaurantCard restaurantName="Meghana foods" cuisine="biryani, chicken biryani, veg biryani" rating="4.5" deliveryTime="28" />
            </div>
        </main>
    );
}

// AppLayout Component
function AppLayout() {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    );
}

// Render AppLayout
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);