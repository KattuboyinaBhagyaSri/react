import { useState } from "react";

//Create a Dropdown menu with contry names and if you click on India it will show thier cities
const Dropdown = () => {
  const [state, setState] = useState([]);
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pakistan", value: "pak", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "ban", cities: ["Dhaka", "Chittagong"] },
  ];
  const handleDropdown = (e) => {
    const filteredData = countries.filter((country) => country.value === e);
    // console.log(filteredData);
    setState(filteredData[0].cities);
  };
  return (
    <div>
      <select onChange={(e) => handleDropdown(e.target.value)}>
        {countries.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
      <select>
        {state.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

//Create 2 lists one list with checkbox and other with no checkbox .And if you click on 1st list checkbox
//it should swap with 2Nd lists

const Contact = () => {
  const [list1, setList1] = useState([
    { title: "item1", checked: "false" },
    { title: "item2", checked: "false" },
    { title: "item3", checked: "false" },
  ]);
  const [list2, setList2] = useState([
    { title: "itemA", checked: "false" },
    { title: "itemB", checked: "false" },
    { title: "itemC", checked: "false" },
  ]);
  const handleCheckBox = ()=>{
    console.log("cliked");
    
  }
  return (
    <div>
      <div>
        <h3>List1</h3>
        <ul>
          {list1.map((item) => (
            <li>
              <input type="checkbox" checked={item.checked} onClick={handleCheckBox}/>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>List2</h3>
        <ul>
          {list2.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
