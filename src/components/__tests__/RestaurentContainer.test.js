import { render, screen } from "@testing-library/react"
import RestaurentContainer,{withOffer} from "../RestaurentContainer"
import MOCK_DATA from "../mocks/resContainerMock.json"
import "@testing-library/jest-dom"


it("should render Restaurent container component with props data",()=>{
    render(<RestaurentContainer resData={MOCK_DATA}/>)
    // console.log(MOCK_DATA.info);
    

    const resName = screen.getByText("Pawan Garden Restaurant")
    expect(resName).toBeInTheDocument()
})
 it("should render Restaurant Component with Offer label",()=>{
  const RestaurentContainerOffer = withOffer(RestaurentContainer);

    render(<RestaurentContainerOffer resData={MOCK_DATA}/>)

    const offer = screen.getByText("Offer")
    expect(offer).toBeInTheDocument()
 })