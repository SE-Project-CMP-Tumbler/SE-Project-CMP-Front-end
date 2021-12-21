/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogs } from './usertumblrAPI';

const userBlogs = createSlice({
  name: 'userBlogs',
  initialState: {
    blogs: [],
    isLoading: true,
    error: null,
  },
  reducers: {

  },

  extraReducers: {
    [fetchBlogs.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [fetchBlogs.fulfilled]: (state, { payload }) => {
      const s = state;
      s.blogs = payload.blogs;
      s.isLoading = false;
    },
    [fetchBlogs.rejected]: (state, action) => {
      const s = state;
      s.error = action.error.message;
      // need to later work on an error page/pop up and set loading to false.
    },
  },
});

export const selectBlogs = (state) => state.userBlogs;
export { fetchBlogs };
export default userBlogs.reducer;
