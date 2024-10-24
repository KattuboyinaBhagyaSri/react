import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utilities/constants";
import ShimmerUi from "./ShimmerUi";

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8072523&lng=81.5316033&restaurantId=503716&catalog_qa=undefined&submitAction=ENTER
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); 
  //destructuring params.resId
  const {resId} = useParams()
  console.log(resId);
  
  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL + resId)
    // console.log(data);
    
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.8072523&lng=81.5316033&restaurantId=503716&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    // setResItems(
    //   json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards
    // );
  };
if(resInfo === null) return <ShimmerUi/>
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
  console.log(resInfo);
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card
  console.log(itemCards);
  
  
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join()}-{costForTwoMessage}
      </h3>
      <h2>Menu:</h2>
      <ul>
        {itemCards.map(item => 
        <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}
        </li>)}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
