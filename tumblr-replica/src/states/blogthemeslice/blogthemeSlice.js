/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';
import { getBlogTheme, putBlogTheme } from './blogthemeAPI';

const blogTheme = createSlice({
  name: 'blogTheme',
  initialState: {
    theme: { },
    // "color_title": "#000000",
    // "font_title": "Gibson",
    // "font_weight_title": "bold",
    // "description": "dec",
    // "title": "dec",
    // "background_color": "#FFFFFF",
    // "accent_color": "#e17e66",
    // "body_font": "Helvetica Neue",
    // "header_image": "www.image.com",
    // "avatar": "www.jjj.com",
    // "avatar_shape": "circle"
    blogId: '',
    status: '',
  },
  reducers: {
    /**
    * This function resets the status state
    * @method
    * @param {object} state The object that stores the current Status number
    */
    resetStatus: (state) => {
      const s = state;
      s.settingsStatus = '';
    },
    /**
     * This function sets whether Share Likes is on or not
     * @method
     * @param {object} state The object that stores the current ShareLikes value
     * @param {object} action The object containing the new ShareLikes value
     */
    setShareLikes: (state, action) => {
      const s = state;
      s.settings.share_likes = action.payload;
    },
  },

  extraReducers: {
    [getBlogTheme.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [getBlogTheme.fulfilled]: (state, { payload }) => {
      const s = state;
      if (payload.theme.meta.status === '200') {
        s.theme = payload.theme.response;
        s.blogId = payload.id;
        s.status = '200';
      }
      s.isLoading = false;
      console.log('Blog Theme:', s.theme);
    },
    [getBlogTheme.rejected]: () => {

    },
    [putBlogTheme.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [putBlogTheme.fulfilled]: (state, { payload }) => {
      const s = state;
      if (payload.meta.status === '200') {
        s.theme = payload.response;
      }
      s.isLoading = false;
    },
    [putBlogTheme.rejected]: () => {

    },
  },
});

export const selectBlogTheme = (state) => state.blogTheme.theme;
export const selectStatus = (state) => state.blogTheme.status;
export const selectBlogId = (state) => state.blogTheme.blogId;
export { getBlogTheme, putBlogTheme };
export const {
  resetStatus, setShareLikes,
} = blogTheme.actions;
export default blogTheme.reducer;
