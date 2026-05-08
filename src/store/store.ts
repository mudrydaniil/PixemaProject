import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer, // Теперь здесь валидный объект с редьюсером
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;