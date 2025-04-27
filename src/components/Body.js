import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      info: {
        id: "152417",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/166c48f6-5875-4509-b218-f3af425f96a0_152417.jpg",
        avgRating: "4.3",
        cuisines: ["Burgers", "American"],
        sla: {
          slaString: "45-50 mins",
        },
      },
    },
    {
      info: {
        id: "155266",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e1a77e07-4e9b-4b5c-8c11-2debe231c746_155266.jpg",
        avgRating: "3.9",
        cuisines: ["Pizzas"],
        sla: {
          slaString: "45-50 mins",
        },
      },
    },
    {
      info: {
        id: "155265",
        name: "Mehfil",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e1a77e07-4e9b-4b5c-8c11-2debe231c746_155266.jpg",
        avgRating: "4.2",
        cuisines: ["Biryanis"],
        sla: {
          slaString: "45-50 mins",
        },
      },
    },
  ]);

  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
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
