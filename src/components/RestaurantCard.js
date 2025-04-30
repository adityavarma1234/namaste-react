import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
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
    </div>
  );
};

export default RestaurantCard;
