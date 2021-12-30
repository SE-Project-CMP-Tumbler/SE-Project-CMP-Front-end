import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const BlockedByAsynch = createAsyncThunk(
  'blocked_by/:blog_id',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('blockedby');
      return response.data;
    }
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const id = state.user.user.primaryBlogId.toString();
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.get(`block/${id}/${BlogId}`, { headers: { Authorization: AuthStr } });
    return response.data;
  },
);

const initialState = {
  blocked: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const BlockedBySlice = createSlice({
  name: 'blocked',
  initialState,
  reducers: {},
  extraReducers: {
    [BlockedByAsynch.pending]: () => {
      // console.log('Pending');
    },
    [BlockedByAsynch.fulfilled]: (state, { payload }) => ({ ...state, blocked: payload }),
    [BlockedByAsynch.rejected]: () => {
      // console.log('Rejected!');
    },

  },
});

const getBlocked = (state) => state.blocked.blocked;
const BlockedReducer = BlockedBySlice.reducer;
export {
  getBlocked,
  BlockedByAsynch,
};
export default BlockedReducer;
