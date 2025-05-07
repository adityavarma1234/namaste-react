import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          data-testid="foodItems"
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="p-2">
              <span>{item.card.info.name}</span>
              <div>
                <span> ₹ </span>
                <span>
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <span className="text-xs ">{item.card.info.description}</span>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                <button
                  className="p-2 mx-16 bg-black text-white shadow-lg rounded-lg cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
