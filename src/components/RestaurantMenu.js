import { useEffect, useState } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5169014&lng=78.3428304&restaurantId=152417&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json.data);
  };

  if (restaurantInfo == null) {
    return <ShimmerRestaurantCard />;
  }
  const itemCards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  return (
    <div className="menu">
      <h1>{restaurantInfo.cards[2].card.card.info.name}</h1>
      <img
        className="restaurant-logo"
        src={CDN_URL + restaurantInfo.cards[2].card.card.info.cloudinaryImageId}
      />
      <p>{restaurantInfo.cards[2].card.card.info.costForTwoMessage}</p>
      <h2>Menu</h2>{" "}
      <ul>
        {itemCards.map((itemCard) => (
          <li>{itemCard.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
