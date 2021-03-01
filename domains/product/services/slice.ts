import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { Product } from '~/types/product';
import { mockFetch } from '~/mockFetcher';
import { StoreState } from '~/store';

type State = {
  isFetching: boolean;
  items: Product[];
  selectedCategoryId: string;
};

export const mockItems: State['items'] = [
  {
    id: 1,
    title: 'Hoodie black',
    thumbnail: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: 'This is product detail description',
    price: 200000,
  },
  {
    id: 2,
    title: 'Adidas yeezy',
    thumbnail: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: 'This is product detail description',
    price: 20000000,
  },
  {
    id: 3,
    title: 'Nike AF1',
    thumbnail: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: 'This is product detail description',
    price: 2400000,
  },
  {
    id: 4,
    title: 'New balance',
    thumbnail: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: 'This is product detail description',
    price: 4500000,
  },
];

export const fetchProductList = createAsyncThunk(
  'product/fetchList',
  async ({ categoryId }: { categoryId: string }) => {
    const response = await mockFetch({
      mockData: mockItems,
      body: { categoryId },
    });
    return response as State['items'];
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
    builder.addCase(fetchProductList.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isFetching = false;
    });
  },
});

export const { selectCategory } = productSlice.actions;
export const useProductState = () => useSelector((state: StoreState) => state.product);

export default productSlice.reducer;
