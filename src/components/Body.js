import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          className="search-text"
          id="search-id"
          onChange={(e) => {
            console.log(e.target.value);
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            console.log("Search button clicked");
            if (searchValue.length > 3) {
              const filteredList = listOfRestaurants.filter((restaurantList) =>
                restaurantList.info.name.startsWith(searchValue)
              );
              setListOfRestaurants(filteredList);
              console.log(filteredList);
            } else {
              setListOfRestaurants(restaurantList);
              console.log("all list showing");
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
