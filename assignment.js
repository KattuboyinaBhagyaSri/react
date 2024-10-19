import React from "react";
import ReactDOM from "react-dom/client";

//  Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//     div with class “title”)
//     ○ Create the same element using JSX
//     ○ Create a functional component of the same with JSX
//     ○ Pass attributes into the tag in JSX
//     ○ Composition of Component(Add a component inside another)
//     ○ {TitleComponent} vs {<TitleComponent/>} vs
//     {<TitleComponent></TitleComponent>} in JSX

//React Element
const nestedHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "This is h1"),
  React.createElement("h2", {}, "This is h2"),
  React.createElement("h3", {}, "This is h3"),
]);

//Element with JSX

const nestedHeaderJsx = (
  <div className="title">
    <h1 className="h1tag">This is h1 byJsx</h1>
    <h2>This is h2 byJsx</h2>
    <h3>This is h3 byJsx</h3>
  </div>
);

//Function with JSX

const TitleComponent = () => {
    return (
       <h1>This is by Title Component</h1>
    );
  };
  


//Function with JSX

const NestedFuncComp = () => {
  return (
    <div className="title">
        {/* {TitleComponent()}
        <TitleComponent></TitleComponent> */}
        <TitleComponent/>
     <h1>This is h1 by Jsx func component</h1>
    <h2>This is h2 by Jsx func componen</h2>
    <h3>This is h3 by Jsx func componen</h3>
    </div>
  );
};




// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice


const HeaderComponent = () =>{
    return (
        <header className="conainer">
        <div className="logo">
               <img src="logo.jpeg" alt="Logo"/>
        </div>
        <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        </div>
        <div className="user-icon">
        <img src="usericon.jpeg" alt="User-Icon"/>
        </div>
        </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

//React to create an Element
// React.CreateElement => React Element => Object => Html Element(by rendering)
// const reactHeading = React.createElement("h1",{id:"heading"},"This is React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(reactHeading)

//JSX to create React ELement
//JSX =>(babel transpiles jsx to react) React.createElement => React Element => Object => Html Element(by rendering)
// const jsxHeading = <h1 id="heading">This is by JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)

//React Funnctional Component - JS function returns a piece of JSX code or returns React Elements
//Always create a component with Capital letter
//When we use return we have give curlybraces () =>{return ....}
//When we not use return we have give curlybraces () => .....

const Title = () => {
  return <h1 id="title">Hello I am from Title Component</h1>
}

const elem = <h2>Hello I am react element</h2>
const HeadingComponent = () => {
  return <h1 id="heading">This is React Functional Component</h1>
}

const HeadingComponent2 = () => <h1 id="heading">This is react functional component without return</h1>
//Component Composition - composing 2 components in one another
//whatever you  write in curly braces {} inside an react element or in a react function coomponent
//  is an javascript expression.Tou can write anything like a js variable or a js function 
const HeadingComponent3 = () => (
<div id="main">
  {elem}
  <Title />
  For 1 or more elements use parenthesis()
<h1 id="heading">This is react functional component without return</h1>
</div>)

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent3 />)