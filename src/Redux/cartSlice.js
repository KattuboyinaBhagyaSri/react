import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //Behind the scenes redux uses Immer package(allows you to work with immutable state)
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    //Original Sate = {items:["pizza"]}
    clearItems: (state) => {
      //ReduxjsToolkit(RTK) - either mutate the existing state or return a new state
      // state.items.length = 0; //original Sate = []
      return {items:[]} // this new object will replaced inside original state = {items:[]}
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
