import { createSlice } from '@reduxjs/toolkit';

import { Items } from '../../data/foodMenu';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: Items,
  },
  reducers: {
    addProduct: (state, action) => {
      state.productList.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
