import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { StoreState } from '~/store';

export type State = {
  isAuth: boolean | '';
};

const authSlice = createSlice({
  name: 'auth',

  initialState: { isAuth: '' } as State,

  reducers: {
    updateStatus(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { actions } = authSlice;
export const useAuthState = () =>
  useSelector((state: StoreState) => state.auth);

export default authSlice.reducer;
