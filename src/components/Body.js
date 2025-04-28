import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const Body = () => {
  console.log("body rendered");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5169014&lng=78.3428304&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length == 0 ? (
    <ShimmerRestaurantCard />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          className="search-text"
          id="search-id"
          value={searchValue}
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
                restaurantList.info.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              );
              setListOfRestaurants(filteredList);
              console.log(filteredList);
            } else {
              setListOfRestaurants(listOfRestaurants);
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
