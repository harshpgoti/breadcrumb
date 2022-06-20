import { configureStore } from '@reduxjs/toolkit';
import breadcrumbReducer from '../features/breadcrumb/breadcrumbSlice'

export const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbReducer,
  },
});
