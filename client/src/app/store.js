import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import breadcrumbReducer from '../features/breadcrumb/breadcrumbSlice'

export const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbReducer,
  },
});
