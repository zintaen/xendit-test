import { combineReducers } from '@reduxjs/toolkit';

import productSlice from '~/domains/product/services/slice';
import cartSlice from '~/domains/cart/services/slice';

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
});

export type StoreState = ReturnType<typeof rootReducer>;

export default rootReducer;
