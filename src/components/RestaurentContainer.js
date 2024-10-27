import {CDN_URL} from "../../utilities/constants"
const RestaurentContainer = (resData) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.resData?.info;
    // console.log(resData.resData.info);
    return (
      <div className="w-56 h-96 m-2 p-4 bg-orange-400 hover:bg-orange-500 rounded-md">
        <img
          className="w-[200] h-36 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="foodImage"
        />
        <h3 className="font-bold m-2">{name}</h3>
        <h4 className="break-words p-2">{cuisines.join()}</h4>
        <h4 className="p-2">⭐{avgRating}</h4>
        <h4 className="font-bold p-2">{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurentContainer
  