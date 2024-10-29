import { useParams } from "react-router-dom";
import { API_URL } from "../../utilities/constants";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../../utilities/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8072523&lng=81.5316033&restaurantId=503716&catalog_qa=undefined&submitAction=ENTER
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  //destructuring params.resId
  const { resId } = useParams();
  //Custom Hook
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <ShimmerUi />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
  // console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //  console.log(categories)
  const handleSetShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? false : index));
  };
  return (
    <div className="text-center">
      <h1 className="font-bold mx-4 my-2">{name}</h1>
      <p>
        {cuisines.join()}-{costForTwoMessage}
      </p>
      <div>
        {categories.map((cat, index) => (
          <RestaurantCategories
            data={cat?.card?.card}
            key={cat?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => handleSetShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
