import React from "react";
class UserClassChild extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name + "UserClassChild Constructor");
        
    }
    componentDidMount(){
console.log(this.props.name + "UserClassChildChld Component DidMount Called");

    }
    render(){
        console.log(this.props.name + "UserClassChildChld rendered");
        
        return (
            <div>
                <h2>This is UserClassChild</h2>
            </div>
        )
    }
}

export default UserClassChild