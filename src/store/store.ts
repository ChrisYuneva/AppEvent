import { configureStore } from '@reduxjs/toolkit';
import { catalogSlice } from './catalog/catalogSlice';
import { basketSlice } from './basket/basketSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice.reducer,
    basket: basketSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;