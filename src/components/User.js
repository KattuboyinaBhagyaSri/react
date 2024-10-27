import { useState } from "react";
const User = (props) => {
    const {name,location} = props
    const [count,setCount] = useState(0);
    const [count2] = useState(1)
  return (
    <div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Update Count</button>
        <h1>Count2 = {count2}</h1>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>Contact:8919670464</h4>
    </div>
  );
};


export default User;