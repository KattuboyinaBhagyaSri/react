import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
it("should render Header Component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Quering
  //If you have so many buttons and you need test a specific button then you can specify it in (arg) another object in getByRole
  const loginBtn = screen.getByRole("button",{name:"Login"})
// const loginBtn = screen.getByText("Login")
  //Assertion
  expect(loginBtn).toBeInTheDocument()
});
it("should render Header Component with Cart Items",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      // By using regex(/ /) /Cart/ it will check if there cart or not And not check if it have another words or not
      const cartItems = screen.getByText(/Cart/)
      expect(cartItems).toBeInTheDocument()
})
it("should render Header Component with Cart Items 0",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const cartItems = screen.getByText("Cart - (0 items)")
      expect(cartItems).toBeInTheDocument()
})
it("should change the login button to logout on click",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
     const loginBtn = screen.getByRole("button",{name:"Login"})
     //fireEvent.click() for clicking the button
     fireEvent.click(loginBtn);
    const logOutBtn = screen.getByRole("button",{name:"Logout"})

    expect(logOutBtn).toBeInTheDocument()
})