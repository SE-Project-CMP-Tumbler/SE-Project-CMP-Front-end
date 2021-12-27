import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiR } from '../../apis/globalAxpi';

const UnBlockAsynch = createAsyncThunk(
  'unblock_blog/:blog_id',
  async (BlogId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const id = state.user.user.primaryBlogId.toString();
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.delete(`block/${id}/${BlogId}`, { headers: { Authorization: AuthStr, Accept: 'application/json', 'Content-Type': 'application/json' } });
    return response.data;
  },
);

const initialState = {
  unblock: { meta: { status: '000', msg: 'Loading' } },
};

const unBlockSlice = createSlice({
  name: 'unblock',
  initialState,
  reducers: {},
  extraReducers: {
    [UnBlockAsynch.pending]: () => { },
    [UnBlockAsynch.fulfilled]: (state, { payload }) => ({ ...state, unblock: payload }),
    [UnBlockAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getunBlock = (state) => state.unblock.unblock;
const unBlockReducer = unBlockSlice.reducer;
export {
  getunBlock,
  UnBlockAsynch,
};
export default unBlockReducer;
