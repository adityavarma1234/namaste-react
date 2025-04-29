import { useEffect } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (restaurantInfo == null) {
    return <ShimmerRestaurantCard />;
  }

  console.log(restaurantInfo);

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
