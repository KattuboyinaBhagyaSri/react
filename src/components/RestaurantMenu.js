import { useParams } from "react-router-dom";
import { API_URL } from "../../utilities/constants";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../../utilities/useRestaurantMenu";

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8072523&lng=81.5316033&restaurantId=503716&catalog_qa=undefined&submitAction=ENTER
const RestaurantMenu = () => {
  //destructuring params.resId
  const { resId } = useParams();
  //Custom Hook
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <ShimmerUi />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;


  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join()}-{costForTwoMessage}
      </h3>
      <h2>Menu:</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
