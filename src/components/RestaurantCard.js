const RestaurantCard = (props) => {
  const { restaurantData } = props;
  console.log(restaurantData);

  return (
    <div
      className="restaurant-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantData.info.cloudinaryImageId
        }
      />
      <h3>{restaurantData.info.name}</h3>
      <h4>{restaurantData.info.cusinies}</h4>
      <h4>{restaurantData.info.avgRating}</h4>
      <h4>{restaurantData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
