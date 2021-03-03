import { combineReducers } from '@reduxjs/toolkit';

import productSlice from '~/domains/product/services/slice';
import cartSlice from '~/domains/cart/services/slice';
import authSlice from '~/domains/auth/services/slice';

const rootReducer = combineReducers({
  auth: authSlice,
  product: productSlice,
  cart: cartSlice,
});

export type StoreState = ReturnType<typeof rootReducer>;

export default rootReducer;
