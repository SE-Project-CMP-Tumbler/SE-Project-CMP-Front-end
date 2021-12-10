import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardApi from '../../../apis/dashboardApi';

const fetchPosts = createAsyncThunk(
  'DashPosts/fetchPosts',
  async () => {
    const response = await dashboardApi.get('post/3');
    return response.data;
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
      s.Posts = payload.dashboard;
    },
    [fetchPosts.rejected]: () => {
    },
  },
});
const getDashPosts = (state) => state.DashPosts.Posts;
const getPostByID = (state, action) => state.Posts.filter((p) => p.post_id === action.payload.pid);
export { getDashPosts, fetchPosts, getPostByID };
export default DashPosts.reducer;
