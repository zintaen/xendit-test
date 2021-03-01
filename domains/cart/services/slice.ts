import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { StoreState } from '~/store';
import { Product, CartProduct } from '~/types/product';

export type State = {
  selectedProducts: {
    [key: string]: CartProduct;
  };
};

const productSlice = createSlice({
  name: 'cart',

  initialState: {
    selectedProducts: {},
  } as State,

  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const { payload } = action;
      const { amount } = state.selectedProducts[payload.id] || { amount: 0 };
      state.selectedProducts[payload.id] = { ...payload, amount: amount + 1 };
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      const { payload: productId } = action;
      delete state.selectedProducts[productId];
    },
    updateProductAmount(
      state,
      action: PayloadAction<{ productId: number; newValue: number }>
    ) {
      const { productId, newValue } = action.payload;
      state.selectedProducts[productId].amount = newValue;
    },
  },
});

export const { actions } = productSlice;
export const useCartState = () => useSelector((state: StoreState) => state.cart);

export default productSlice.reducer;
