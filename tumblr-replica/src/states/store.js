import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
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
    user: userReducer,
  },
});

export default store;
