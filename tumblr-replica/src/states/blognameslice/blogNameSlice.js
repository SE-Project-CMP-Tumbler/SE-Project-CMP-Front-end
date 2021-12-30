import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const fetchBlogId = createAsyncThunk(
  'blog/getblogId',
  async (UserName, { getState }) => {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('blogname');
      return response.data;
    }
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.get(`blog/info/${UserName}`, { headers: { Authorization: AuthStr } });
    return response.data;
  },
);

const initialState = {
  blogId: {
    response: {},
    meta: { status: '000', msg: 'Loading' },
    error: false,
  },
};

const BlogIdSlice = createSlice({
  name: 'blogId',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlogId.pending]: () => {
      // console.log('Pending');
    },
    [fetchBlogId.fulfilled]: (state, { payload }) => ({ ...state, blogId: payload }),
    [fetchBlogId.rejected]:
      (state) => ({ ...state, blogId: { ...state.blogId, error: true } }),
  },

});

const getBlogId = (state) => state.blogId.blogId;
const BlogIdReducer = BlogIdSlice.reducer;
export {
  getBlogId,
  fetchBlogId,
};
export default BlogIdReducer;
