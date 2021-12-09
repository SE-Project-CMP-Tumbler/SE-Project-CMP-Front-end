import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BlogApi from '../../apis/BlogApi';

const fetchBlog = createAsyncThunk(
  'blog/getblog',
  async () => {
    const response = await BlogApi.get('blogs');
    console.log(response.data);
    return response.data;
  },
);

const initialState = {
  blog: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlog.pending]: () => {
      // console.log('Pending');
    },
    [fetchBlog.fulfilled]: (state, { payload }) => ({ ...state, blog: payload }),
    [fetchBlog.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlog = (state) => state.blog.blog;
const BlogReducer = BlogSlice.reducer;
export {
  getBlog,
  fetchBlog,
};
export default BlogReducer;
