import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardApi from '../../../apis/dashboardApi';
// import { api } from '../../../apis/globalAPI';

const fetchPosts = createAsyncThunk(
  'DashPosts/fetchPosts',
  async () => {
    const response = await dashboardApi.get('posts/random_posts');
    // const response = await dashboardApi.get('post/1');
    // console.log('should work');
    console.log(response.data.response);
    // console.log(response.data);
    return response.data.response;
    // return response.data;
  },
);

const DashPosts = createSlice({
  name: 'DashPosts',
  initialState: {
    Posts: [],
  },
  reducers: {
    GetPostWithID: (state, action) => state.Posts.filter((p) => p.post_id === action.payload.pid),
  },
  extraReducers: {
    [fetchPosts.pending]: () => {
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      const s = state;
      s.Posts = payload.posts;
      // s.Posts = payload.dashboard;
      console.log('Quick Check');
      console.log(payload.posts);
    },
    [fetchPosts.rejected]: () => {
    },
  },
});
const getDashPosts = (state) => state.DashPosts.Posts;
const getPostByID = (state, action) => state.Posts.filter((p) => p.post_id === action.payload.pid);
export { getDashPosts, fetchPosts, getPostByID };
export default DashPosts.reducer;
