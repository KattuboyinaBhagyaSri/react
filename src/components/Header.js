import { LOGO_URL } from "../../utilities/constants"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // let btnName = "Login"

const [btnNameReact,setBtnNameReact] = useState("Login")
console.log("header rendered");
//If there is no dependency array,useEffect is called on every render 
//If there is dependency array,useEffect is called on initial render(just once),
//If there is depency array with value([btnNameReact]),useEffect is called everytime the dependency([btnNameReact]) updated
useEffect(()=>{
  console.log("useEffect Called");
},[])
    return (
      <div className="header">
        <div className="-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="login" onClick={
              ()=>{
                // console.log("button Clicked");
                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
              }
            }
            
            >{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header