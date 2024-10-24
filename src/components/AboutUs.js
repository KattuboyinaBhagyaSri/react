import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
constructor(props){
  super(props);
  console.log("Parent Construtor called")
}
componentDidMount(){
  console.log("Parent Component DidMount Called");
  
    }
render(){
  console.log("parent rendered");
  
  return (
        <div>
          <h1>About Class Based Component </h1>
          <h2>This is React</h2>
          <UserClass name={"First"} location={"TPG class"}/>
          <UserClass name={"Second"} location={"TPG class"}/>
          <UserClass name={"Third"} location={"TPG class"}/>


        </div>
      );
}
}


/*
-Parent Constructor
-Parent Rendered
   -First Child Constructor
   -First Child Rendered

   -Second Child Constructor
   -Second Child Rendered

   -First Child ComponentDidMount
   -Second Child ComponentDidMount

-Parent ComponentDidMount
*/

export default About;
