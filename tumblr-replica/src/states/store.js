import { configureStore } from '@reduxjs/toolkit';
import followtagsReducer from './features/followtags/followtagsSlice';

const store = configureStore({
  reducer: {
    followtags: followtagsReducer,
  },
});

export default store;
