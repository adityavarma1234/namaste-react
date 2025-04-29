import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantInfo;
};

export default useRestaurantMenu;
