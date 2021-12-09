import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncrandomposts = createAsyncThunk(
  'posts/random_posts',
  async () => {
    const response = await exploreApi.get('randomposts');
    // const response = await exploreApi.get(`posts/random_posts`);
    return response.data;
  },
);

const initialState = {
  randomposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const randompostsSlice = createSlice({
  name: 'randomposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncrandomposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncrandomposts.fulfilled]: (state, { payload }) => ({ ...state, randomposts: payload }),
    [fetchAsyncrandomposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getRandomposts = (state) => state.randomposts.randomposts;
const randompostsReducer = randompostsSlice.reducer;
export {
  getRandomposts,
  fetchAsyncrandomposts,
};
export default randompostsReducer;
