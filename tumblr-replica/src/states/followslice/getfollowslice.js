import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const FollowedByAsynch = createAsyncThunk(
  'followed_by/:blog_id',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('followed_by');
      return response.data;
    }
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.get(`followed_by/${BlogId}`, { headers: { Authorization: AuthStr } });
    return response.data;
  },
);

const initialState = {
  followed: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const FollowedBySlice = createSlice({
  name: 'followed',
  initialState,
  reducers: {},
  extraReducers: {
    [FollowedByAsynch.pending]: () => {
      // console.log('Pending');
    },
    [FollowedByAsynch.fulfilled]: (state, { payload }) => ({ ...state, followed: payload }),
    [FollowedByAsynch.rejected]: () => {
      // console.log('Rejected!');
    },

  },
});

const getFollowed = (state) => state.followed.followed;
const FollowedReducer = FollowedBySlice.reducer;
export {
  getFollowed,
  FollowedByAsynch,
};
export default FollowedReducer;
