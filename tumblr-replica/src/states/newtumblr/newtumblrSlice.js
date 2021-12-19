/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';
import { createBlog } from './newtumblrAPI';

const newTumblr = createSlice({
  name: 'newTumblr',
  initialState: {
    title: '',
    url: '.tumblr.com',
    blog_username: '',
    inProgress: true,
    error: null,
  },
  reducers: {
    setTitle: (state, action) => {
      const s = state;
      s.title = action.payload;
    },
    setURL: (state, action) => {
      const s = state;
      const url = action.payload;
      // url = url.replace(/ /g, '');
      s.url = url;
      // const username = url.substring(0, url.length - 10);
      // s.blog_username = username;
      // console.log(username);
      console.log(url);
    },
    initializeState: (state) => {
      const s = state;
      s.title = '';
      s.url = '.tumblr.com';
      s.blog_username = '';
      s.inProgress = true;
      s.error = null;
    },

  },

  extraReducers: {
    [createBlog.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [createBlog.fulfilled]: (state, { payload }) => {
      const s = state;
      s.blogs = payload.blogs;
      s.isLoading = false;
    },
    [createBlog.rejected]: (state, action) => {
      const s = state;
      s.error = action.error.message;
      // need to later work on an error page/pop up and set loading to false.
    },
  },
});

export const selectInputData = (state) => state.newTumblr;
export { createBlog };
export const { setTitle, setURL, initializeState } = newTumblr.actions;
export default newTumblr.reducer;
