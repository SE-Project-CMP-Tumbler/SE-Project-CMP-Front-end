import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PostSubmissionAsynch = createAsyncThunk(
  'post_submission/post_id',
  async (PostId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;

    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.dev.tumbler.social/api/post/approve/' + PostId,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      throw Error(err);
    }
  },
);

const initialState = {
  postSubmit: { meta: { status: '000', msg: 'Loading' } },
};

const PostSubmitSlice = createSlice({
  name: 'postsubmit',
  initialState,
  reducers: {},
  extraReducers: {
    [PostSubmissionAsynch.pending]: () => { },
    [PostSubmissionAsynch.fulfilled]: (state, { payload }) => ({ ...state, postSubmit: payload }),
    [PostSubmissionAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getPostSubmit = (state) => state.postSubmit.postSubmit;
const PostSubmitReducer = PostSubmitSlice.reducer;
export {
  getPostSubmit,
  PostSubmissionAsynch,
};
export default PostSubmitReducer;
