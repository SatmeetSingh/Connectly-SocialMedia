import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './Pages/Auth/AuthSlice';
import homeReducer, { HomeState } from './Pages/HomePage/HomeSlice';
import AppReducer, { AppState } from './Pages/AppLayout/layoutSlice';
import SearchReducer, { SearchState } from './Pages/SearchPage/SearchSlice';

export type RootState = {
  search: SearchState; // Use the correct state type here
  auth: AuthState; // Define other slices as needed
  home: HomeState;
  app: AppState;
};
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    search: SearchReducer,
    auth: authReducer,
    home: homeReducer,
    app: AppReducer,
  },
});

export default store;
