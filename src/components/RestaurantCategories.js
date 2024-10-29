import { useState } from "react";
import ListItems from "./ListItems";
const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  // console.log(setShowIndex);
  // const [showItems,setShowItems] = useState(false);
  handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="bg-gray-100 shadow-lg p-4 w-6/12 mx-auto my-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title}({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>{showItems && <ListItems items={data.itemCards}/>}</div>
    </div>
  );
};

export default RestaurantCategories;
