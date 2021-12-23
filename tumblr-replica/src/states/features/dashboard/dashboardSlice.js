import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const fetchPosts = createAsyncThunk(
  'DashPosts/fetchPosts',
  async (User) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'GET',
        url: `${api}/posts/dashboard`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.data.meta.status === '200') {
        return response.data.response;
      }
      return [];
    }
    try {
      const response = await Axios({
        method: 'GET',
        url: `${apiR}/posts/dashboard`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.data.meta.status === '200') {
        return response.data.response;
      }
      return [];
    } catch (err) {
      console.log(err.message);
      return [];
    }
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
      console.log(payload);
      const s = state;
      s.Posts = payload.posts;
    },
    [fetchPosts.rejected]: () => {
    },
  },
});
const getDashPosts = (state) => state.DashPosts.Posts;
const getPostByID = (state, action) => state.Posts.filter((p) => p.post_id === action.payload.pid);
export {
  getDashPosts, fetchPosts, getPostByID,
};
export default DashPosts.reducer;
