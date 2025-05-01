import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
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
                <button className="p-2 mx-16 bg-black text-white shadow-lg rounded-lg">
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
