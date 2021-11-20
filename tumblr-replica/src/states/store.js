import { configureStore } from '@reduxjs/toolkit';
import followtagsReducer from './features/followtags/followtagsSlice';
import tagReducer from './features/tag/tagSlice';
import trendtagReducer from './features/trendtag/trendtagSlice';

const store = configureStore({
  reducer: {
    followtags: followtagsReducer,
    tag: tagReducer,
    trendtag: trendtagReducer,
  },
});

export default store;
