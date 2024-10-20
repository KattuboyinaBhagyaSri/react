import RestaurentContainer from "./RestaurentContainer";
import resList from "../../utilities/mockData";
import { useState } from "react";


const Body = () => {
//Local state Varaible - super powerful variable
  const [listOfRestaurants,setListOfRetuarants] = useState(resList)

//JavaScript Variable
// const restaurantsList = [{

// }]
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            filteredRestaurants = listOfRestaurants.filter(
              res => res.info.avgRating > 4
            )
            setListOfRetuarants(filteredRestaurants)
            
          }}
          >  
            The Rated Resturants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurentContainer resData={restaurant} key={restaurant.info.id}/>
          ))}
          {/* <RestaurentContainer resData = {resList[2]}/> */}
          {/* <RestaurentContainer resData = {resObj.restaurants[1]}/> */}
          {/* <RestaurentContainer resName="Burger King" cuisine="Burger,FrenchFries,coke" rating="4.5" deliveryTime="20mins"/> */}
        </div>
      </div>
    );
  };

  export default Body;