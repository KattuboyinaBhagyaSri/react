import RestaurentContainer, { withOffer } from "./RestaurentContainer";
import resList from "../../utilities/mockData";
import { useState, useEffect ,useContext} from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlinestatus from "../../utilities/useOnlineStatus";
import UserContext from "../../utilities/UserContext";
const Body = () => {
  // Local state Varaible - super powerful variable
  // useState()
  console.log("Body rendered");

  const [listOfRestaurants, setListOfRetuarants] = useState([]);
  const [filterSearchRestaurants, setFilterSearchRestaurants] = useState();

  const RestaurentContainerOffer = withOffer(RestaurentContainer);

  // console.log(RestaurentContainerOffer);
  
  console.log(listOfRestaurants);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlinestatus();
const {loggedInuser,setUserName} = useContext(UserContext)
  //JavaScript Variable
  // const restaurantsList = [{

  // }]

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8072523&lng=81.5316033&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //Bypass cors issue by using https://corsproxy.io/? before your api url
    const json = await data.json();
    // console.log(json);
    // console.log( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //Optional Chaining
    setListOfRetuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterSearchRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //Conditionl Rendering
  // if(listOfRestaurants.length === 0){
  //   return <ShimmerUi />
  // }
  //Conditionl Rendering using Terenary coperator
  if (onlineStatus === false) {
    return <h1>Looks like you're Offline. Check Your Connection!!</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="flex p-2 m-2 items-center">
        <div>
          <input
            className="border border-solid border-black rounded-md"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="bg-blue-200 rounded-md px-4 py-2 m-4 text-white"
          onClick={() => {
            filterSearchRes = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterSearchRestaurants(filterSearchRes);
          }}
        >
          Search
        </button>
        <button
          className="bg-blue-200 rounded-md px-4 py-2 m-4 text-white"
          onClick={() => {
            filterRes = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterSearchRestaurants(filterRes);
          }}
        >
          Top Rated Resturants
        </button>
        <div>
          <label>User : </label>
          <input
            className="border border-solid border-black rounded-md"
            type="text"  value={loggedInuser} onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterSearchRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurentContainerOffer resData={restaurant}/>
            ) : (
              <RestaurentContainer resData={restaurant} />
            )}
          </Link>
        ))}
        {/* <RestaurentContainer resData = {resList[2]}/> */}
        {/* <RestaurentContainer resData = {resObj.restaurants[1]}/> */}
        {/* <RestaurentContainer resName="Burger King" cuisine="Burger,FrenchFries,coke" rating="4.5" deliveryTime="20mins"/> */}
      </div>
    </div>
  );
};

export default Body;
