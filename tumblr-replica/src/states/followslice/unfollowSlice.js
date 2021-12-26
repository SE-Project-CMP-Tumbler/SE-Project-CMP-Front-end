import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiR } from '../../apis/globalAxpi';

const UnFollowAsynch = createAsyncThunk(
  'unfollow_blog/:blog_id',
  async (BlogId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.delete(`follow_blog/${BlogId}`, { headers: { Authorization: AuthStr, Accept: 'application/json', 'Content-Type': 'application/json' } });
    return response.data;
  },
);

const initialState = {
  unfollow: { meta: { status: '000', msg: 'Loading' } },
};

const unFollowSlice = createSlice({
  name: 'unfollow',
  initialState,
  reducers: {},
  extraReducers: {
    [UnFollowAsynch.pending]: () => { },
    [UnFollowAsynch.fulfilled]: (state, { payload }) => ({ ...state, unfollow: payload }),
    [UnFollowAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getunFollow = (state) => state.unfollow.unfollow;
const unFollowReducer = unFollowSlice.reducer;
export {
  getunFollow,
  UnFollowAsynch,
};
export default unFollowReducer;
