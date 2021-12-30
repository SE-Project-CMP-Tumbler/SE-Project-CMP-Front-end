import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const fetchBlog = createAsyncThunk(
  'blog/getblog',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('blogm');
      return response.data;
    }
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.get(`blog/${BlogId}`, { headers: { Authorization: AuthStr } });
    return response.data;
  },
);

const initialState = {
  blog: {
    response: {},
    meta: { status: '000', msg: 'Loading' },
  },
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
