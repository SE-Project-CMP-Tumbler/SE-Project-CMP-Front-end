import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFollower,
  follow,
  searchFollowblog,
  followedBy,
  block,
  unBlock,
} from './followerspageAPI';

const initialState = {
  followers: [],
  followerNum: '0',
  isFollowMessage: '',
};

const followerReduser = createSlice({
  name: 'Follower',
  initialState,
  reducers: {
    deleteIsFollowMsg: (state) => {
      const newstate = state;
      newstate.isFollowMessage = '';
    },
  },
  extraReducers: {
    [fetchFollower.pending]: () => {
      console.log('pending');
    },
    [fetchFollower.fulfilled]: (state, { payload }) => {
      if (payload?.meta.status === '200') {
        const newstate = state;
        newstate.followers = payload?.response.followers;
        newstate.followerNum = payload?.response.followers.length;
        console.log(newstate.followers);
        console.log('followers fetched suc');
      } else {
        console.log('there is an error when fetch the followers');
      }
    },
    [fetchFollower.rejected]: () => {
      console.log('errorrrrrrrrrrrrr');
    },
    [follow.pending]: () => {
      console.log('pending');
    },
    [follow.fulfilled]: () => {
      console.log('follow is done successfully');
    },
    [follow.rejected]: () => {
      console.log('follow is failed');
    },
    [searchFollowblog.pending]: () => {
      console.log('pending');
    },
    [searchFollowblog.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.res.meta.status === '200') {
        newstate.isFollowMessage = payload?.res.meta.msg;
        console.log('this user follow you ');
      } else if (payload?.res.meta.status === '422') {
        newstate.isFollowMessage = payload?.res.meta.msg;
        console.log(payload?.res.meta.msg);
      } else if (payload?.res.meta.status === '404') {
        console.log(payload?.res.meta.msg);
        newstate.isFollowMessage = `${payload?.userNeme} does not follow you`;
      }
    },
    [searchFollowblog.rejected]: (state, { payload }) => {
      const newstate = state;
      newstate.isFollowMessage = `${payload?.userNeme} does not follow you`;
      console.log('errorrrrrrrrrrrrr');
    },
    [followedBy.pending]: () => {
      console.log('pending');
    },
    [followedBy.fulfilled]: (state, { payload }) => {
      if (payload?.meta.status === '200') {
        console.log(payload?.response.followed);
        console.log('hello from followed by');
        return true;
      }
      return false;
    },
    [followedBy.rejected]: () => {
      console.log('errorrrrrrrrrrrrr');
    },
    [block.pending]: () => {
      console.log('pending');
    },
    [block.fulfilled]: (state, { payload }) => {
      if (payload?.meta.status === '200') {
        console.log('the blog has been blocked sucssesfully');
        return true;
      }
      return false;
    },
    [block.rejected]: () => {
      console.log('errorrrrrrrrrrrrr');
    },
    [unBlock.pending]: () => {
      console.log('pending');
    },
    [unBlock.fulfilled]: (state, { payload }) => {
      if (payload?.meta.status === '200') {
        console.log('the blog has been unblocked sucssesfully');
        return true;
      }
      return false;
    },
    [unBlock.rejected]: () => {
      console.log('errorrrrrrrrrrrrr');
    },
  },
});
export default followerReduser.reducer;
export const {
  deleteIsFollowMsg,
} = followerReduser.actions;
