import { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";
import { useRestaurants } from "../hooks/useRestaurants";

const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2122949&lng=72.97716609999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

export default function Body() {
  const { restaurants, loading } = useRestaurants(API_URL);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFilterHighRated = () => {
    setSearchQuery(""); // clear search if filtering manually
  };

  return (
    <main className="body"> 
      <div className="search-controls">
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <button className="btn btn-filter" onClick={handleFilterHighRated}>
          Show All
        </button>
      </div>

      <RestaurantList
        data={
          searchQuery
            ? filteredRestaurants
            : restaurants
        }
        isLoading={loading}
      />
    </main>
  );
}
