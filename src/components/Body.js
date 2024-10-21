import RestaurentContainer from "./RestaurentContainer";
import resList from "../../utilities/mockData";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  //Local state Varaible - super powerful variable
  //useState()
  // console.log("Body rendered");
  
  const [listOfRestaurants, setListOfRetuarants] = useState([]);
  const [filterSearchRestaurants,setFilterSearchRestaurants] = useState([])
  // console.log(listOfRestaurants,"listOfRestaurants");
  // console.log(filterSearchRestaurants,"filterSearchRestaurants");
  
  
  const [searchText, setSearchText] = useState("");
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
  return listOfRestaurants.length === 0 ? (<ShimmerUi />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="search-btn"
          onClick={() => {
             filterSearchRes = listOfRestaurants.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterSearchRestaurants(filterSearchRes)
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filterRes = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterSearchRestaurants(filterRes);
          }}
        >
          The Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filterSearchRestaurants.map((restaurant) => (
          <RestaurentContainer resData={restaurant} key={restaurant.info.id} />
        ))}
        {/* <RestaurentContainer resData = {resList[2]}/> */}
        {/* <RestaurentContainer resData = {resObj.restaurants[1]}/> */}
        {/* <RestaurentContainer resName="Burger King" cuisine="Burger,FrenchFries,coke" rating="4.5" deliveryTime="20mins"/> */}
      </div>
    </div>
  );
};

export default Body;
