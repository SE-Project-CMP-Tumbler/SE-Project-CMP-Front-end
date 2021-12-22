import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncblogactivity = createAsyncThunk(
  'blog_activity/:blog_id',
  async ({ Blogid }) => {
    const response = await exploreApi.get(`blogactivity?tag=${Blogid}`);
    // const response = await exploreApi.get(`blog_activity/${blog_id}`);
    return response.data;
  },
);

const initialState = {
  blogactivity: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const blogactivitySlice = createSlice({
  name: 'blogactivity',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncblogactivity.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncblogactivity.fulfilled]:
     (state, { payload }) => ({ ...state, blogactivity: payload }),
    [fetchAsyncblogactivity.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlogactivity = (state) => state.blogactivity.blogactivity;
const blogactivityreducer = blogactivitySlice.reducer;
export {
  getBlogactivity,
  fetchAsyncblogactivity,
};
export default blogactivityreducer;
