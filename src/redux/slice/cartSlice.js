import { createSlice } from '@reduxjs/toolkit';
import { errorToast } from '../../helper/Toaster';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.unshift({
        ...action.payload.item,
        qty: 1,
        userId: action.payload.id,
      });
    },
    removeCart: (state, action) => {
      let id = action.payload;
      let newCartItem = state.cartItems.filter((item) => {
        return id !== item.id;
      });
      state.cartItems = newCartItem;
      errorToast('Item Removed');
    },
    increaseQty: (state, action) => {
      let id = action.payload;
      let newCartItems = state.cartItems.map((item) => {
        return item.id === id ? { ...item, qty: item['qty'] + 1 } : item;
      });
      state.cartItems = newCartItems;
    },
    decreaseQty: (state, action) => {
      let id = action.payload;
      let newCartItems = state.cartItems.map((item) => {
        return item.id === id ? { ...item, qty: item['qty'] - 1 } : item;
      });
      state.cartItems = newCartItems;
    },
    getLength: (state) => {
      return { ...state, length: state.cartItems.length };
    },
  },
});

export const { addToCart, removeCart, increaseQty, decreaseQty, getLength } =
  cartSlice.actions;
export default cartSlice.reducer;
