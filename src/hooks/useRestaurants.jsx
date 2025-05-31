import { useEffect, useState } from "react";

export function useRestaurants(apiUrl) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        const restaurantCards = data.data.cards.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );

        const extracted = restaurantCards.map((card) => card.card.card.info);
        setRestaurants(extracted);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }

    };

    fetchRestaurants();
  }, [apiUrl]);

  return { restaurants, loading };
}
