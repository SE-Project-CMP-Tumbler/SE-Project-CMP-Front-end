import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import FollowApi from '../../apis/FollowApi';

const FollowAsynch = createAsyncThunk(
  'follow_blog/:blog_id',
  async (BlogId) => {
    const response = await FollowApi.post(`follow_blog/:${BlogId}`);
    return response.data;
  },
);

const UnFollowAsynch = createAsyncThunk(
  'follow_blog/:blog_id',
  async (BlogId) => {
    const response = await FollowApi.delete(`follow_blog/:${BlogId}`);
    return response.data;
  },
);

const initialState = {
  follow: { response: { tags: [] }, meta: { status: '000', msg: 'Loading' } },
};

const FollowSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {},
  extraReducers: {
    [FollowAsynch.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    [FollowAsynch.rejected]: () => {
      // console.log('Rejected!');
    },

    [UnFollowAsynch.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    [UnFollowAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getFollow = (state) => state.follow.follow;
const FollowReducer = FollowSlice.reducer;
export {
  getFollow,
  FollowAsynch,
  UnFollowAsynch,
};
export default FollowReducer;
