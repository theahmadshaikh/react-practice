import { useEffect, useState } from "react";

export function useMenu(apiUrl) {
  const [menu, setMenu] = useState([]); // structured: [{ category, items: [...] }]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        const regularCards = data?.data?.cards?.find(c => c.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        if (!regularCards) {
          setMenu([]);
          setLoading(false);
          return;
        }

        const categoryCards = regularCards.filter(
          card => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        const fullMenu = categoryCards.map(category => {
          const { title, itemCards = [] } = category.card.card;
          const items = itemCards.map(item => {
            const info = item.card.info;
            return {
              id: info.id,
              name: info.name,
              description: info.description,
              price: (info.price || info.defaultPrice || 0) / 100,
              vegClassifier: info.itemAttribute?.vegClassifier,
              imageUrl: info.imageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.imageId}`
                : null,
            };
          });

          return {
            category: title,
            items,
          };
        });

        setMenu(fullMenu);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, [apiUrl]);

  return { menu, loading };
}
