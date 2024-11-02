import { useContext } from "react";
import {CDN_URL} from "../../utilities/constants"
const RestaurentContainer = (props) => {
  const {resData} = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.info;
    // console.log(resData.info);
    return (
      <div className="w-56 h-96 m-2 p-4 bg-blue-200 hover:bg-blue-300 rounded-md">
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

export const withOffer = (RestaurentContainer) =>{
return (props) =>{
  // console.log(props);
  
  return (
    <div>
      <label className="absolute bg-black text-white rounded-lg  p-2">Offer</label>
      <RestaurentContainer {...props}/>
    </div>
  )
}
}
  export default RestaurentContainer
  