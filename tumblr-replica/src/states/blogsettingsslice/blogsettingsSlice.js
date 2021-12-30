/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';
import { getBlogId, getBlogSettings, putBlogSettings } from './blogsettingsAPI';

const blogSettings = createSlice({
  name: 'blogSettings',
  initialState: {
    settings: { },
    //   shareLikes: true,
    //   shareFollowings: true,
    //   blogId: '',
    //   blogUsername: '',
    //   repliesSettings: 'Everyone can reply',
    //   askSettings: {
    //     allowAsk: false,
    //     askPageTitle: '',
    //     allowAnonymousQuestions: '',
    //   },
    //   submissionsSettings: {
    //     allowSubmittions: true,
    //     submissionsPageTitle: 'Submit a post',
    //     submissionsGuidelines: '',
    //   },
    //   allowMessages: true,
    // },
    blogInfo: {},
    settingsStatus: '',
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
    /**
     * This function sets whether Share Followings is on or not
     * @method
     * @param {object} state The object that stores the current Share Followings value
     * @param {object} action The object containing the new Share Followings value
     */
    setShareFollowings: (state, action) => {
      const s = state;
      s.settings.share_followings = action.payload;
    },
    /**
     * This function sets whether Allow Messages is on or not
     * @method
     * @param {object} state The object that stores the current Allow Messages value
     * @param {object} action The object containing the new Allow Messages value
     */
    setAllowMessages: (state, action) => {
      const s = state;
      s.settings.allow_messages = action.payload;
    },
    /**
     * This function sets the value of Replies Settings
     * @method
     * @param {object} state The object that stores the current Replies Settings value
     * @param {object} action The object containing the new Replies Settings value
     */
    setRepliesSettings: (state, action) => {
      const s = state;
      s.settings.replies_settings = action.payload;
    },
    /**
     * This function sets whether Allow Ask is on or not
     * @method
     * @param {object} state The object that stores the current Allow Ask value
     * @param {object} action The object containing the new Allow Ask value
     */
    setAllowAsk: (state, action) => {
      const s = state;
      s.settings.ask_settings.allow_ask = action.payload;
    },
  },

  extraReducers: {
    [getBlogId.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [getBlogId.fulfilled]: (state, { payload }) => {
      const s = state;
      console.log(payload);
      s.blogInfo = payload;
      s.settings.id = payload.id;
      s.settings.blogUsername = payload.username;
      s.isLoading = false;
    },
    [getBlogId.rejected]: () => {

    },
    [getBlogSettings.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [getBlogSettings.fulfilled]: (state, { payload }) => {
      const s = state;
      // console.log(payload);
      if (payload.settings.meta.status === '200') {
        // console.log(payload);
        s.settings = payload.settings.response;
        s.blogInfo = payload.blogInfo;
        s.settingsStatus = '200';
      }
      s.isLoading = false;
      console.log('Blog Settings:', s.settings);
      console.log('BlogInfo', s.blogInfo);
      console.log('BlogStatus', s.settingsStatus);
    },
    [getBlogSettings.rejected]: () => {

    },
    [putBlogSettings.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [putBlogSettings.fulfilled]: (state, { payload }) => {
      const s = state;
      console.log(payload);
      if (payload.meta.status === '200') {
        console.log('Settings Changed Successfully');
        s.settings = payload.response;
        // s.settingsStatus = '200';
      }
      s.isLoading = false;
    },
    [putBlogSettings.rejected]: () => {

    },
  },
});

export const selectBlogSettings = (state) => state.blogSettings.settings;
export const selectBlogInfo = (state) => state.blogSettings.blogInfo;
export const selectLoading = (state) => state.blogSettings.isLoading;
export const selectStatus = (state) => state.blogSettings.settingsStatus;
export { getBlogId, getBlogSettings, putBlogSettings };
export const {
  resetStatus, setShareLikes, setShareFollowings, setAllowMessages, setRepliesSettings,
  setAllowAsk,
} = blogSettings.actions;
export default blogSettings.reducer;
