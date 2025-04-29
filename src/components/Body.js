import RestaurantCard from "./RestaurantCard";

import { useState } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  const restaurantsListFromAPI = useRestaurantList();

  if (restaurantsListFromAPI == null) {
    return <ShimmerRestaurantCard />;
  }

  const renderRestaurantList =
    listOfRestaurants == null ? restaurantsListFromAPI : listOfRestaurants;
  return (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search.."
            className="search-text"
            id="search-id"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              if (searchValue.length > 3) {
                const filteredList = restaurantsListFromAPI.filter(
                  (restaurantList) =>
                    restaurantList.info.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                );
                setListOfRestaurants(filteredList);
              } else {
                setListOfRestaurants(restaurantsListFromAPI);
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
              const filteredList = restaurantsListFromAPI.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {renderRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
