import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FollowAsynch = createAsyncThunk(
  'follow_blog/:blog_id',
  async (BlogId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;

    try {
      const response = await axios({
        method: 'POST',
        url: `https://api.dev.tumbler.social/api/follow_blog/${BlogId}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw Error(err);
    }
  },
);

const initialState = {
  follow: { meta: { status: '000', msg: 'Loading' } },
};

const FollowSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {},
  extraReducers: {
    [FollowAsynch.pending]: () => { },
    [FollowAsynch.fulfilled]: (state, { payload }) => ({ ...state, follow: payload }),
    [FollowAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getFollow = (state) => state.follow.follow;
const FollowReducer = FollowSlice.reducer;
export {
  getFollow,
  FollowAsynch,
};
export default FollowReducer;
