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
      if (response.data.meta.status === '200') {
        return response.data.response;
      }
      return [];
    } catch {
      return [];
    }
  },
);
const fetchNext = createAsyncThunk(
  'DashPosts/fetchNext',
  async ({ User, next }) => {
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
      if (response.data.meta.status === '200') {
        return response.data.response;
      }
      return [];
    }
    try {
      const response = await Axios({
        method: 'GET',
        url: `${apiR}/posts/dashboard?page=${next}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.data.meta.status === '200') {
        return response.data.response;
      }
      return [];
    } catch (err) {
      return [];
    }
  },
);
const DashPosts = createSlice({
  name: 'DashPosts',
  initialState: {
    Posts: [],
    Pagination: {},
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
      s.Pagination = payload.pagination;
    },
    [fetchPosts.rejected]: () => {
    },
    [fetchNext.pending]: () => {
    },
    [fetchNext.fulfilled]: (state, { payload }) => {
      const s = state;
      s.Posts = [...s.Posts, ...payload.posts];
      s.Pagination = payload.pagination;
    },
    [fetchNext.rejected]: () => {
    },
  },
});
const getDashPosts = (state) => state.DashPosts.Posts;
const getDashPagination = (state) => state.DashPosts.Pagination;
const getPostByID = (state, action) => state.Posts.filter((p) => p.post_id === action.payload.pid);
export {
  getDashPosts, fetchPosts, getPostByID, getDashPagination, fetchNext,
};
export default DashPosts.reducer;
