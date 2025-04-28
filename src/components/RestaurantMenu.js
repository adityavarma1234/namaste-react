import { useEffect, useState } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const { restaurantId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId);
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
          <li key={itemCard.card.info.id}>
            {itemCard.card.info.name} - Rs.
            {itemCard.card.info.defaultPrice / 100 ||
              itemCard.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
