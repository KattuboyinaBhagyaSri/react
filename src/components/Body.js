import RestaurentContainer from "./RestaurentContainer";
import resList from "../../utilities/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
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