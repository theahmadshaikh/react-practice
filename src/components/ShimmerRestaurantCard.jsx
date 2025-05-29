import React from "react";
import "../../index.css"; // Assuming you have a CSS file for styles

export default function ShimmerRestaurantCard() {
  return (
    <div className="restaurant-card shimmer-card">
      <div className="shimmer shimmer-image" />
      <div className="shimmer shimmer-title" />
      <div className="cusine-and-delivery">
        <div className="shimmer shimmer-text" />
        <div className="shimmer shimmer-text" />
      </div>
      <div className="shimmer shimmer-rating" />
    </div>
  );
}
