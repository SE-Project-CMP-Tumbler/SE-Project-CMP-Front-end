import { configureStore } from '@reduxjs/toolkit';
import followtagsReducer from './features/followtags/followtagsSlice';
import tagreducer from './features/tag/tagSlice';

const store = configureStore({
  reducer: {
    followtags: followtagsReducer,
    tag: tagreducer,
  },
});

export default store;
