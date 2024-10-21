import { LOGO_URL } from "../../utilities/constants"
import { useState } from "react";
const Header = () => {
  // let btnName = "Login"
const [btnNameReact,setBtnNameReact] = useState("Login")
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
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