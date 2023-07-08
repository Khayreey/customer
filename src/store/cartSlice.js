import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isWaitingForGetCart: true,
    errorInGetCart: null,
    numOfItemsInCart : 0 , 
    orderId : ''
  },
  reducers: {
    getCartFromDb(state, action) {
      state.cart = action.payload;
      state.isWaitingForGetCart = false;
      state.errorInGetCart = null;
      state.numOfItemsInCart = action.payload.length
    },
   setId(state , action) {
      state.orderId = action.payload
   } , 
    setWaitingTrue(state , action) {
      state.isWaitingForGetCart = action.payload;
    },
    setWaitingFalse(state) {
      state.isWaitingForGetCart = false;
    },
    setErrorInGetCart(state, action) {
      state.errorInGetCart = action.payload;
    },
   
    clearCartError(state) {
      state.errorInGetCart = null;
    },
  
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
