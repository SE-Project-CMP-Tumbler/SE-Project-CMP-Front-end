import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosApi, { MOCK, SERVICETYPE } from '../../apis/globalAxpi';

const initialState = {
  followers: [],
  followerNum: '0',
  isFollowMessage: '',
};

export const fetchFollower = createAsyncThunk('Follower/fetchFollower', async () => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.get('/followers');
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await AxiosApi.get('/followers');
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const followedBy = createAsyncThunk('Follower/followedBy', async (blogID) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.get('/followed_by');
      return response?.data;
    }
    const response = await AxiosApi.get(`/followed_by/${blogID}`);
    return response?.data;
  } catch (err) {
    throw Error(err);
  }
});

export const searchFollowblog = createAsyncThunk('Follower/searchFollowblog', async (userName) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.get(`/search_follow_blog/${userName}`);
      return response.data;
    }
    const response = await AxiosApi.get(`/search_follow_blog/${userName}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const follow = createAsyncThunk('Follower/toggleFollowState', async (blogId) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.post('/following', { id: blogId });
      return response.data;
    }
    const response = await AxiosApi.post(`/follow_blog/${blogId}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const block = createAsyncThunk('Follower/block', async (blogId) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.post(`/block/${blogId}`);
      return response.data;
    }
    const response = await AxiosApi.post(`/block/${blogId}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const unBlock = createAsyncThunk('Follower/unBlock', async (blogId) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.delete(`/block/${blogId}`);
      return response.data;
    }
    const response = await AxiosApi.delete(`/block/${blogId}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

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
        newstate.followers = payload?.followers;
        newstate.followerNum = payload?.followers.length;
        console.log(newstate.followers);
        console.log('hhhhhhh');
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
      console.log('errorrrrrrrrrrrrr');
    },
    [searchFollowblog.pending]: () => {
      console.log('pending');
    },
    [searchFollowblog.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.meta.status === '200') {
        newstate.isFollowMessage = payload?.meta.msg;
        console.log('follows you ');
      } else if (payload?.meta.status === '422') {
        newstate.isFollowMessage = payload?.meta.msg;
      } else if (payload?.meta.status === '404') {
        console.log(payload?.meta.msg);
      }
    },
    [searchFollowblog.rejected]: () => {
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
