import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlicel({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    //it will make the mapping of action and reducer
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: () => {
      state.items.pop();
    },
  },
});
export const { addItem, clearCart, removeItem } = cartSlice.actions; //this is actions
export default cartSlice.reducer; //this is reducer from redux-toolkit not reducers from this js file
