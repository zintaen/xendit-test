import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { AxiosRequestConfig } from 'axios';

import { Product } from '~/types/product';
import { StoreState } from '~/store';
import api from '~/utils/api';

type State = {
  isFetching: boolean;
  items: Product[];
  selectedCategoryId: string;
};

export const fetchProductList = createAsyncThunk(
  'product/fetchList',
  async (params: AxiosRequestConfig) => {
    const response = await api.get('/products', params || {});
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',

  initialState: {
    isFetching: false,
    items: [],
    selectedCategoryId: '',
  } as State,

  reducers: {
    selectCategory(state, action: PayloadAction<string>) {
      state.selectedCategoryId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(
      fetchProductList.fulfilled,
      (state, action: PayloadAction<State['items']>) => {
        state.items = action.payload;
        state.isFetching = false;
      }
    );
  },
});

export const { selectCategory } = productSlice.actions;
export const useProductState = () =>
  useSelector((state: StoreState) => state.product);

export default productSlice.reducer;
