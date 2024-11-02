import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// Food APP
// Header
//  - Logo
//  -Navitems(Home,About,Contact,Cart)
//Body
//  -Search
//  -Restauranat Container
//  -Restaurant Cards
//      -Image,NAme,Cusines,Rating,Delivery time
//Footer
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "pak", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "ban", cities: ["Dhaka", "Chittagong"] },
];

const Dropdown = ({ data }) => {
  console.log(data);
   const [state,setState] = useSate([]);
   const handleDropdown = (e) =>{
console.log(e);
     const filteredData = countries.filter(item => item.value === e)
     setState(filteredData[0].cities)
   }
  return (
    <div>
      <select onChange={(e) => handleDropdown(e.target.value)}>
      {data.map((count) => <option value={count.value}>{count.name}</option>)}
          
      </select>
      <select>
      {state.map((city) => <option value={city}>{city}</option>)}
          
      </select>
    </div>
  );
};
// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbocQOd6OMWi6kJ0m9vpdY1ES2mlVc8-aiQ&s"
//           alt="Logo"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// const resList = [
//   {
//     id:1,
//     name:"KFC",
//     avgRating:4.2,
//     deliveryTime:"30 mins"
//   },
//   {
//     id:2,
//     name:"BurgerKing",
//     avgRating:4,
//     deliveryTime:"35 mins"
//   }, {
//     id:3,
//     name:"PizzaIn",
//     avgRating:4.5,
//     deliveryTime:"30 mins"
//   }, {
//     id:4,
//     name:"Kings Point",
//     avgRating:4.3,
//     deliveryTime:"30 mins"
//   }, {
//     id:5,
//     name:"TastyBiytes",
//     avgRating:3.8,
//     deliveryTime:"32 mins"
//   }, {
//     id:6,
//     name:"ThickShakes",
//     avgRating:3.5,
//     deliveryTime:"40 mins"
//   }, {
//     id:7,
//     name:"TeaPoint",
//     avgRating:4.2,
//     deliveryTime:"40 mins"
//   }, {
//     id:8,
//     name:"Unlimited",
//     avgRating:4.7,
//     deliveryTime:"20 mins"
//   }, {
//     id:9,
//     name:"Meghana Foods",
//     avgRating:4.4,
//     deliveryTime:"40 mins"
//   },
// ]
// const RestaurantContainer = (props) => {
//   // console.log(props?.resData);
//   const {id,name,avgRating,deliveryTime} = props?.resData
//   // const { name, rating } = props;
//   // console.log(name,rating);

//   return (
//     <div className="res-card">
//       <img
//         className="resImage"
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p4pbkegyfttqxurcmmja"
//         alt="ResImg"
//       />
//       <h3>{name}</h3>
//       <h4>Burgers,Coke</h4>
//       <h4>{avgRating}</h4>
//       <h4>{deliveryTime}</h4>
//     </div>
//   );
// };
// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">
//         <input type="text" />
//       </div>
//       <div className="res-container">
//       {resList.map((res)=>   <RestaurantContainer resData={res} key={res?.id} />

//     )}
//       </div>
//     </div>
//   );
// };
const AppLAyout = () => {
  return (
    <div>
      <Dropdown data={countries} />
      {/* <Header />
      <Body /> */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLAyout />);
