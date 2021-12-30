import { createSlice } from '@reduxjs/toolkit';

import {
  fetchFollowing,
  unfollow,
  followBlogsearch,
} from './followingpageAPI';

const initialState = {
  following: [],
  followingNum: '0',
  afterFollowMessage: '',
};
const followingReduser = createSlice({
  name: 'Follow',
  initialState,
  extraReducers: {
    [fetchFollowing.pending]: () => {
      console.log('pending');
    },
    [fetchFollowing.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.meta.status === '200') {
        newstate.following = payload?.response.followings;
        console.log(newstate.following);
        newstate.followingNum = (payload?.response.followings).length;
      } else {
        console.log('there us an error when fetch the following');
      }
    },
    [fetchFollowing.rejected]: () => {
      console.log('error');
    },
    [unfollow.pending]: () => {
      console.log('pending');
    },
    [unfollow.fulfilled]: () => {
      console.log('Unfollow user is done sucessfully');
    },
    [unfollow.rejected]: () => {
      console.log('error');
    },
    [followBlogsearch.pending]: () => {
      console.log('pending');
    },
    [followBlogsearch.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.res?.meta.status === '200') {
        newstate.afterFollowMessage = `you are following ${payload?.tofollow} now. What is a great decision`;
      } else if (payload?.res?.meta.status === '404') {
        newstate.afterFollowMessage = 'Yes!Nothing found';
      } else {
        console.log('Error happen while try to follow someone ');
      }
    },
    [followBlogsearch.rejected]: ({ payload }) => {
      if(payload?.res?.meta.status === '422')
      {
        newstate.afterFollowMessage = 'You already follow ';
      }
      console.log('error');
    },
  },
});
export default followingReduser.reducer;
export const {
  deleteFollowing, getUsersAndFollow,
} = followingReduser.actions;
