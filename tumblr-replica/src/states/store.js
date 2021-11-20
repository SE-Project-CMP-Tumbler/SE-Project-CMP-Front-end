import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
