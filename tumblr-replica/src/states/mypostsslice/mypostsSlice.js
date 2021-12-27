import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const fetchAsyncMyPosts = createAsyncThunk(
  'blog/posts',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('myposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        const USER_TOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USER_TOKEN}`;
        const response = await apiR.get('posts/' + BlogId + '/published', { headers: { Authorization: AuthStr } });
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  myposts: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const MyPostsSlice = createSlice({
  name: 'myposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMyPosts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncMyPosts.fulfilled]:
      (state, { payload }) => ({ ...state, myposts: payload }),
    [fetchAsyncMyPosts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getMyPosts = (state) => state.myposts.myposts;
const MyPostsReducer = MyPostsSlice.reducer;
export {
  getMyPosts,
  fetchAsyncMyPosts,
};
export default MyPostsReducer;
