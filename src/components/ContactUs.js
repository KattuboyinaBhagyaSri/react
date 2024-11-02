import { useState } from "react";

const Contact = () =>{
  return (
    <div>
     <h3 className="text-3xl font-bold p-4 m-4">Contact Us</h3>
    <form>
      <input type="text" placeholder="name" className="border border-black rounded p-2 m-2"/>
      <input type="text" placeholder="message" className="border border-black rounded p-2 m-2"/>
      <button className="border border-black rounded p-2 m-2 bg-gray-200">Submit</button>
    </form>
    </div>
  )
}

export default Contact;
