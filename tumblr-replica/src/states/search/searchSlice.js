/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';
import { fetchStuff } from './searchAPI';

const searchStuff = createSlice({
  name: 'searchStuff',
  initialState: {
    searchResponse: {},
    blogs: [],
    posts: [],
    tags: [],
    isLoading: true,
    error: null,
  },
  reducers: {

  },

  extraReducers: {
    [fetchStuff.pending]: (state) => {
      const s = state;
      s.isLoading = true;
      console.log('Attempting Request');
    },
    [fetchStuff.fulfilled]: (state, { payload }) => {
      const s = state;
      s.searchResponse = payload;
      s.blogs = payload.response.blogs.blogs;
      s.posts = payload.response.posts.posts;
      s.tags = payload.response.tags.tags;
      s.isLoading = false;
      console.log('Done!', s.posts);
    },
    [fetchStuff.rejected]: (state, action) => {
      console.log('Booom!');
      const s = state;
      s.error = action.error.message;
      // need to later work on an error page/pop up and set loading to false.
    },
  },
});

export const selectSearch = (state) => state.searchStuff;
export { fetchStuff };
export default searchStuff.reducer;
