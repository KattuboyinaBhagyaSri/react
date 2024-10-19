import {CDN_URL} from "../../utilities/constants"
const RestaurentContainer = (resData) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.resData?.info;
    // console.log(resData.resData.info);
    return (
      <div className="res-cards">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="foodImage"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join()}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurentContainer
  