import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    let apiRestaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(apiRestaurantList);
  };

  useEffect(() => {
    fetchRestaurantList();
  }, []);
  return restaurantList;
};

export default useRestaurantList;
