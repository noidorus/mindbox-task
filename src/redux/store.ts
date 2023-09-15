import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoReducer';

export const store = configureStore({
  reducer: todoReducer,
});

export type Store = typeof store;
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = Store['dispatch'];
