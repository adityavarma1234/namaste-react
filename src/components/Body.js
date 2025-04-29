import RestaurantCard from "./RestaurantCard";

import { useState, useEffect, use } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfAllRestaurants, setListOfAllRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5169014&lng=78.3428304&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let apiRestaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfAllRestaurants(apiRestaurantList);
    setListOfRestaurants(apiRestaurantList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  return listOfRestaurants.length == 0 ? (
    <ShimmerRestaurantCard />
  ) : (
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
                const filteredList = listOfAllRestaurants.filter(
                  (restaurantList) =>
                    restaurantList.info.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                );
                setListOfRestaurants(filteredList);
              } else {
                setListOfRestaurants(listOfAllRestaurants);
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
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
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
