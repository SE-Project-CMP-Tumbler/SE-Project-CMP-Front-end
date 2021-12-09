import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from './blogslice/blogslice';
import FollowReducer from './followslice/followslice';
import BlockReducer from './blockslice/blockslice';

const store = configureStore({
  reducer: {
    Blog: BlogReducer,
    Follow: FollowReducer,
    Block: BlockReducer,
  },
});

export default store;
