import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsynctrendingposts = createAsyncThunk(
  'posts/trending',
  async () => {
    const response = await exploreApi.get('trendingposts');
    // const response = await exploreApi.get(`posts/trending`);
    return response.data;
  },
);

const initialState = {
  trendingposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const trendingpostsSlice = createSlice({
  name: 'trendingposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynctrendingposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctrendingposts.fulfilled]:
     (state, { payload }) => ({ ...state, trendingposts: payload }),
    [fetchAsynctrendingposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getTrendingposts = (state) => state.trendingposts.trendingposts;
const trendingpostsReducer = trendingpostsSlice.reducer;
export {
  getTrendingposts,
  fetchAsynctrendingposts,
};
export default trendingpostsReducer;
