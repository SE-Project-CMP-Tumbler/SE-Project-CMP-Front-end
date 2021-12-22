import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BlockApi from '../../apis/BlogApi';

const BlockAsynch = createAsyncThunk(
  'block_blog/:blog_id',
  async (BlogId) => {
    const response = await BlockApi.post(`block_blog/:${BlogId}`);
    return response.data;
  },
);

const UnBlockAsynch = createAsyncThunk(
  'block_blog/:blog_id',
  async (BlogId) => {
    const response = await BlockApi.delete(`block_blog/:${BlogId}`);
    return response.data;
  },
);

const initialState = {
  block: { meta: { status: '000', msg: 'Loading' } },
};

const BlockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {},
  extraReducers: {
    [BlockAsynch.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    [BlockAsynch.rejected]: () => {
      // console.log('Rejected!');
    },

    [UnBlockAsynch.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    [UnBlockAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlock = (state) => state.block.block;
const BlockReducer = BlockSlice.reducer;
export {
  getBlock,
  BlockAsynch,
  UnBlockAsynch,
};
export default BlockReducer;
