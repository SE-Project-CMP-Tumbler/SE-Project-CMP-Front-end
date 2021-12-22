import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncbloginfo = createAsyncThunk(
  'blog/:blog_id',
  async ({ Blogid }) => {
    const response = await exploreApi.get(`bloginfo?tag=${Blogid}`);
    // const response = await exploreApi.get(`blog/${blog_id}`);
    return response.data;
  },
);

const initialState = {
  bloginfo: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const bloginfoSlice = createSlice({
  name: 'bloginfo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncbloginfo.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncbloginfo.fulfilled]:
     (state, { payload }) => ({ ...state, bloginfo: payload }),
    [fetchAsyncbloginfo.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBloginfo = (state) => state.bloginfo.bloginfo;
const bloginforeducer = bloginfoSlice.reducer;
export {
  getBloginfo,
  fetchAsyncbloginfo,
};
export default bloginforeducer;
