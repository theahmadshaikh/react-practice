import { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";
import { useRestaurants } from "../hooks/useRestaurants";
import userInternetStatus from "../hooks/useInternetStatus";

const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2122949&lng=72.97716609999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

export default function Body() {
  const { restaurants, loading } = useRestaurants(API_URL);
  const [searchQuery, setSearchQuery] = useState("");
  const isOnline = userInternetStatus();

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowAll = () => {
    setSearchQuery("");
  };

  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-700 dark:text-gray-300 px-4 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-2">🔌 You're Offline</h1>
        <p className="text-sm">Please check your internet connection.</p>
      </div>
    );
  }

  return (
    <main className="px-2 py-4 max-w-7xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-4">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <button
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded shadow transition"
          onClick={handleShowAll}
        >
          Show All
        </button>
      </div>

      <RestaurantList
        data={searchQuery ? filteredRestaurants : restaurants}
        isLoading={loading}
      />
    </main>
  );
}
