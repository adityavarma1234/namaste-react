import { useEffect } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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
  console.log(restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-extrabold text-2xl">
        {restaurantInfo.cards[2].card.card.info.name}
      </h1>
      <p>{restaurantInfo.cards[2].card.card.info.costForTwoMessage}</p>
      <h2 className="font-extrabold">Menu</h2>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
