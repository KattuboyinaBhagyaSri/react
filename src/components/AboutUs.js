import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Construtor called");
  }
  componentDidMount() {
    // console.log("Parent Component DidMount Called");
  }
  render() {
    // console.log("parent rendered");
    return (
      <div>
        <h1>About Class Based Component </h1>
        <h2>This is React</h2>
        <UserClass name={"First"} location={"TPG"} />
      </div>
    );
  }
}

/*
Render Phase
-Parent Constructor
-Parent Rendered

   -First Child Constructor
   -First Child Rendered

   -Second Child Constructor
   -Second Child Rendered
DOM Updated in Single Batch / Commit Phase
   -First Child ComponentDidMount
   -Second Child ComponentDidMount

-Parent ComponentDidMount
*/

export default About;
