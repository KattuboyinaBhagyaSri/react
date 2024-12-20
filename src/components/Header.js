import { LOGO_URL } from "../../utilities/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../../utilities/useOnlineStatus";
import UserContext from "../../utilities/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  // let btnName = "Login"

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlinestatus();

  const { loggedInuser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  //If there is no dependency array,useEffect is called on every render
  //If there is dependency array,useEffect is called on initial render(just once),
  //If there is depency array with value([btnNameReact]),useEffect is called everytime the dependency([btnNameReact]) updated
  useEffect(() => {
    // console.log("useEffect Called");
  }, []);
  return (
    <div className="flex justify-between bg-blue-200">
      <div className="-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="p-4 m-4 text-lg text-white">
            OnlineStatus:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-4 m-4 text-lg text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4 text-lg text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 m-4 text-lg text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 m-4 text-lg text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 m-4 text-2xl text-white font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="bg-pink-600 px-4 m-6 text-lg text-white rounded-md"
            onClick={() => {
              // console.log("button Clicked");
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="p-4 m-4 text-lg text-white">User :{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
