import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const fetchBlogs = createAsyncThunk(
  'blogs/getblogs',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('blog');
      return response.data;
    }
    const state = getState();
    const USERTOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USERTOKEN}`; // will be changed
    const response = await apiR.get('blog', { headers: { Authorization: AuthStr } });
    return response.data;
  },
);

const initialState = {
  blogs: {
    response: {},
    meta: { status: '000', msg: 'Loading' },
  },
};

const BlogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlogs.pending]: () => {
      // console.log('Pending');
    },
    [fetchBlogs.fulfilled]: (state, { payload }) => ({ ...state, blogs: payload }),
    [fetchBlogs.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlogs = (state) => state.blogs.blogs;
const BlogsReducer = BlogSlice.reducer;
export {
  getBlogs,
  fetchBlogs,
};
export default BlogsReducer;
