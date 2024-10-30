import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import UserContext from "../utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./components/Cart";

/*
Chunking
Code Splitting
Dynamic Loading
Dynamic Import
Lazy Loading
On demand Loading
*/
const Grocery = lazy(()=> import("./components/Grocery"))
const About = lazy(() => import("./components/AboutUs"))
const AppLayout = () => {
  const [userName,setUserName] = useState();
  //Authentication
useEffect(()=>{
  //make an api call to get userName and apssword
  const data = {
    name : "Bhagya Sri" 
  }
  setUserName(data.name)
},[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInuser: userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {path:"/",
    element:<AppLayout />,
    children:[
      {path:'/',element:<Body />},
      {path:'/about',element:<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>},
      {path:'/contact',element:<Contact />},
      {path:'/grocery',element:<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>},
      {path:'/restaurant/:resId',element:<RestaurantMenu/>},
      {path:'/cart',element:<Cart />},

    ],
    errorElement:<Error />},
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
