const { render,screen } = require("@testing-library/react");
import Contact from "../ContactUs"
import "@testing-library/jest-dom"

//describe groups our test cases
describe("Contact us test case",()=>{
    //test() or it() is same.we can use anyting
    test("Should load contact us page",()=>{
        //render loads our comp on jsdom
        render(<Contact />)
        //Querying
        //whatever you rendered that can be accesed by screen
        const header = screen.getByRole("heading")
        //getByRole find all heading information in that component and givesus
        //Assertion
        //expect will find out whether it was inside scrren or not
        expect(header).toBeInTheDocument();
    })
    it("should load  button in contact us page",()=>{
        render(<Contact />)
        const button = screen.getByText("Submit")
        //Assertion
        expect(button).toBeInTheDocument();
    })
    test("should input name in contact us page",()=>{
        render(<Contact />)
        const input = screen.getByPlaceholderText("name")
        //Assertion
        expect(input).toBeInTheDocument();
    })
    test("should load 2 input Boxes on contact component",()=>{
        render(<Contact/>)
        //Querying
        const inputBoxes = screen.getAllByRole("textbox")
        // console.log(inputBoxes.length)
       //Assertion
       expect(inputBoxes.length).toBe(2)
    })
})
