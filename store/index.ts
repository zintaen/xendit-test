/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, Action, Store } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { StoreState } from './reducer';

export * from './reducer';
export type AppThunk = ThunkAction<void, StoreState, unknown, Action<string>>;

const makeStore: MakeStore = () => {
  const store: Store = configureStore({
    reducer: rootReducer,
  });

  // @ts-ignore
  if (process.env.NODE_ENV === 'development' && module.hot) {
    // @ts-ignore
    module.hot.accept('./reducer', () => {
      // eslint-disable-next-line global-require
      const newRootReducer = require('./reducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export const storeWrapper = createWrapper<StoreState>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default makeStore;
