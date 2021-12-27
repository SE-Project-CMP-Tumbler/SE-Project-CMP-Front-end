import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const fetchAsyncBlogMessages = createAsyncThunk(
  'blog/blogmessages',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('blogmessages');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        const USER_TOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USER_TOKEN}`;
        const response = await apiR.get('messages/' + BlogId, { headers: { Authorization: AuthStr } });
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  blogmessages: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const BlogmessagesSlice = createSlice({
  name: 'blogmessages',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncBlogMessages.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncBlogMessages.fulfilled]:
      (state, { payload }) => ({ ...state, blogmessages: payload }),
    [fetchAsyncBlogMessages.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlogMessages = (state) => state.blogmessages.blogmessages;
const BlogMessagesReducer = BlogmessagesSlice.reducer;
export {
  getBlogMessages,
  fetchAsyncBlogMessages,
};
export default BlogMessagesReducer;
