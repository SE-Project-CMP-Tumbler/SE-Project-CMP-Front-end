import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BlockedByApi from '../../apis/BlogApi';

// const BlockedByAsynch = createAsyncThunk(
//   'Blocked_by/:blog_id',
//   async (BlogId) => {
//     const response = await BlockedByApi.get(`blocked_by/:${BlogId}`);
//     return response.data;
//   },
// );

const BlockedByAsynch = createAsyncThunk(
  'blocked_by/:blog_id',
  async (setBlock) => {
    const response = await BlockedByApi.get('blocked_by');
    setBlock(response.data.response.block);
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
