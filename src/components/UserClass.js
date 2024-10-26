import React from "react";
import UserClassChild from "./UserClassChild";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"DummyName",
        location:"Default"
      }
    };
    console.log(this.props.name + "Child Constructor called");
  }
  //Used to make API calls
 async componentDidMount(){
console.log(this.props.name + "Chld Component DidMount Called");
//Api call
const data = await fetch("https://api.github.com/users/KattuboyinaBhagyaSri")
const json = await data.json()
console.log(json);
this.setState({
  userInfo:json
})
  }
  componentDidUpdate(){
    console.log("componentDid Update");
    
  }
  componentWillUnmount(){
    console.log("component will unmount");
    
  }
  render() {
    console.log(this.props.name + "child rendered");
    const { login, type ,avatar_url} = this.state.userInfo
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name:{login}</h2>
        <h3>Type:{type}</h3>
        <h4>Contact:8919670464</h4>
        {/* <h1><UserClassChild name={"From parent"}/></h1> */}
      </div>
    );
  }
}

/*
/MOUNTING
-Constructor Called(Have Dummy data)
-Render(Rendered with Dummy data)
    -Html Dom (dummy data)
-ComponentDidMount(api call)
   -setState(data with api )


/UPDATING
-Render(render with api data) 
   -Html Dom updated with api data  
-ComponentDid Update

/UNMOUNTING
-ComponentWillUnmount (when you go to other page or leaving the current page ComponentWillMount called)







*/
export default UserClass;
