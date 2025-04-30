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
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search.."
            className="px-4 py-1 border border-solid border-black"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-400 m-4 cursor-pointer rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-green-400 m-4 cursor-pointer items-center rounded-lg"
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
      <div className="flex flex-wrap">
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
