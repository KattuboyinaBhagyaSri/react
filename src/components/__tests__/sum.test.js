
import {sum} from "../sum"

test("Sum function will calculaate the two numbers",()=>{
const result = sum(3,4)
//Assertion
expect(result).toBe(7)
})