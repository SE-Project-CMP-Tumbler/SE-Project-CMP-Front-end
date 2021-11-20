import { configureStore } from '@reduxjs/toolkit';
import followtagsReducer from './features/followtags/followtagsSlice';
import randomtagReducer from './features/randomtag/randomtagSlice';
import tagReducer from './features/tag/tagSlice';
import trendtagReducer from './features/trendtag/trendtagSlice';

const store = configureStore({
  reducer: {
    followtags: followtagsReducer,
    trendtag: trendtagReducer,
    randomtag: randomtagReducer,
    tag: tagReducer,
  },
});

export default store;
