import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncblogposts = createAsyncThunk(
  'posts/{blog_id}',
  async (BlogId) => {
    const response = await exploreApi.get(`blogposts?${BlogId}`);
    // const response = await exploreApi.get(`post/${BlogId}`);
    return response.data;
  },
);

const initialState = {
  blogposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const blogpostsSlice = createSlice({
  name: 'blogposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncblogposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncblogposts.fulfilled]:
     (state, { payload }) => ({ ...state, blogposts: payload }),
    [fetchAsyncblogposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlogposts = (state) => state.blogposts.blogposts;
const blogpostsReducer = blogpostsSlice.reducer;
export {
  getBlogposts,
  fetchAsyncblogposts,
};
export default blogpostsReducer;
