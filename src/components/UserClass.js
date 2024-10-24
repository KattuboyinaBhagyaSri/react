import React from "react";
import UserClassChild from "./UserClassChild";
class UserClass extends React.Component {
  constructor(props) {
 
    
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + "Child Constructor called");
  }
  //Used to make API calls
  componentDidMount(){
console.log(this.props.name + "Chld Component DidMount Called");

  }
  render() {
    console.log(this.props.name + "child rendered");
    
    const { name, location } = this.props;
    const { count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count = {this.state.count}</h1>
        <button onClick={()=>{
            this.setState(
                {
                    count:this.state.count+1,
                }
            )
        }}>Update Count</button>
        <h1>Count = {count2}</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact:8919670464</h4>
        {/* <h1><UserClassChild name={"From parent"}/></h1> */}
      </div>
    );
  }
}

export default UserClass;
