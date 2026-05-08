import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalog-slice';

export const store = configureStore({
  reducer: {
    // Ключ catalog будет отвечать за состояние списка фильмов и фильтрацию
    catalog: catalogReducer,
  },
});

// Типы для использования в приложении и кастомных хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;