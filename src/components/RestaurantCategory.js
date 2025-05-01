import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className=" w-6/12 bg-gray-50 shadow-lg mx-auto p-4 my-4">
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
