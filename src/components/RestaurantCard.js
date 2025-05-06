import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  console.log(props);
  const { restaurantData } = props;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + restaurantData.info.cloudinaryImageId}
      />
      <h3 className="font-extrabold items-start py-0.5">
        {restaurantData.info.name}
      </h3>
      <h4 className="items-start">{restaurantData.info.cusinies}</h4>
      <h4 className="font-medium">{restaurantData.info.avgRating}</h4>
      <h4 className="font-medium">{restaurantData.info.sla.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withHighRatingLabel = (RestaurantCard) => {
  return (props) => {
    console.log(props);
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          HighRated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
