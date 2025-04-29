import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurantList = async () => {
    console.log("fetch restaurant list is called");
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    let apiRestaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(apiRestaurantList);
  };

  useEffect(() => {
    console.log("use effect is called");
    fetchRestaurantList();
  }, []);
  return restaurantList;
};

export default useRestaurantList;
