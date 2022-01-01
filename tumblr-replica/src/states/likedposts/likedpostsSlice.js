import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const fetchAsyncPostsLiked = createAsyncThunk(
  'blogs/likes',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('posts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        const USER_TOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USER_TOKEN}`;
        const response = await apiR.get('blogs/likes/' + BlogId, { headers: { Authorization: AuthStr } });
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  postsliked: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const PostsLikedSlice = createSlice({
  name: 'postsliked',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncPostsLiked.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncPostsLiked.fulfilled]:
      (state, { payload }) => ({ ...state, postsliked: payload }),
    [fetchAsyncPostsLiked.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getPostsliked = (state) => state.postsliked.postsliked;
const PostslikedReducer = PostsLikedSlice.reducer;
export {
  getPostsliked,
  fetchAsyncPostsLiked,
};
export default PostslikedReducer;
