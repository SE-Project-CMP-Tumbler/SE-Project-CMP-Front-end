import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosApi, { MOCK, SERVICETYPE } from '../../apis/globalAxpi';

const initialState = {
  following: [],
  followingNum: '0',
  afterFollowMessage: '',
};

export const fetchFollowing = createAsyncThunk('Follow/fetchFollowing', async () => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.get('/following');
      console.log(response.data);
      return response.data;
    }
    const response = await AxiosApi.get('/following');
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const followBlogsearch = createAsyncThunk('Follow/followBlogsearch', async (toFollow) => {
  try {
    let payload = null;
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.post('/follow_blog_search');
      payload = { res: response.data, toFollow };
      return payload;
    }
    const response = await AxiosApi.post('/follow_blog_search', { blog_value: toFollow });
    payload = { res: response.data, toFollow };
    return payload;
  } catch (err) {
    throw Error(err);
  }
});

export const unfollow = createAsyncThunk('Follow/toggleFollowState', async (blogId) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.delete(`/following/${blogId}`);
      return response.data;
    }
    const response = await AxiosApi.delete(`/follow_blog/${blogId}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

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
        newstate.afterFollowMessage = `you are following ${payload?.toFollow} now. What is a great decision`;
      } else if (payload?.res?.meta.status === '404') {
        newstate.afterFollowMessage = 'Yes!Nothing found';
      } else {
        console.log('Error happen while try to follow someone ');
      }
    },
    [followBlogsearch.rejected]: () => {
      console.log('error');
    },
  },
});
export default followingReduser.reducer;
export const {
  deleteFollowing, getUsersAndFollow,
} = followingReduser.actions;
