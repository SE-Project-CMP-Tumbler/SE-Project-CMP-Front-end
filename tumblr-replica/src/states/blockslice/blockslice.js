import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BlockAsynch = createAsyncThunk(
  'block_blog/:blog_id',
  async (BlogId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const id = state.user.user.primaryBlogId.toString();
    const AuthStr = `Bearer ${USER_TOKEN}`;
    try {
      const response = await axios({
        method: 'POST',
        url: `https://api.dev.tumbler.social/api/block/${id}/${BlogId}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      throw Error(err);
    }
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
  },
});

const getBlock = (state) => state.block.block;
const BlockReducer = BlockSlice.reducer;
export {
  getBlock,
  BlockAsynch,
};
export default BlockReducer;
