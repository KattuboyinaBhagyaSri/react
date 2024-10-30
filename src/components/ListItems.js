import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utilities/constants";
import {addItems} from "../Redux/cartSlice"
const ListItems = ({ items }) => {
  

  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    console.log("add item clicked");
    dispatch(addItems(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className=" border-b-gray-200  border-b-2 text-left py-4 flex justify-between">
            <div className="w-9/12">
              <span className=" font-semibold">
                {item?.card?.info?.name} -{" "}
              </span>
              <span>₹{item?.card?.info?.price / 100}</span>
              <p className="py-4 my-4">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12">
                <button className="bg-white text-green-500 rounded-md absolute font-bold p-2"
                onClick={() => handleAddItem(item)}
                >Add+</button>
              <img
                className="w-40 h-32 rounded-md"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                } alt="itemImg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
