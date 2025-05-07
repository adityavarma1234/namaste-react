import RestaurantCard, { withHighRatingLabel } from "./RestaurantCard";

import { use, useContext, useState } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  const restaurantsListFromAPI = useRestaurantList();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardHighRating = withHighRatingLabel(RestaurantCard);

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
            data-testid="searchInput"
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
        <div>
          <label>User Name: </label>
          <input
            value={loggedInUser}
            className="m-2 p-2 border-black border"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {renderRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
              <RestaurantCardHighRating
                restaurantData={restaurant}
                key={restaurant.info.id}
              />
            ) : (
              <RestaurantCard
                key={restaurant.info.id}
                restaurantData={restaurant}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
