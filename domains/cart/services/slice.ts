import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { StoreState } from '~/store';
import { Product, CartProduct } from '~/types/product';

export type ActionType<T> = {
  payload: T;
};

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
    addToCart(state: State, action: ActionType<Product>) {
      const { payload } = action;
      const { amount } = state.selectedProducts[payload.id] || { amount: 0 };
      state.selectedProducts[payload.id] = { ...payload, amount: amount + 1 };
    },
    deleteFromCart(state: State, action: ActionType<number>) {
      const { payload: productId } = action;
      delete state.selectedProducts[productId];
    },
    updateProductAmount(
      state: State,
      action: ActionType<{ productId: number; newValue: number }>
    ) {
      const { productId, newValue } = action.payload;
      state.selectedProducts[productId].amount = newValue;
    },
  },
});

const { actions, reducer } = productSlice;
export const { addToCart, deleteFromCart, updateProductAmount } = actions;
export const useCartState = () => useSelector((state: StoreState) => state.cart);

export default reducer;
