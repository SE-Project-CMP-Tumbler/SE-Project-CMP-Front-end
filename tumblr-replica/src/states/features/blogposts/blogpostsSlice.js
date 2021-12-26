import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncblogposts = createAsyncThunk(
  'posts/{blog_id}',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('blogposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        console.log(state);
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN);
        console.log(BlogId);
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get(`post/submission/${BlogId}`, { headers: { Authorization: AuthStr } });
        console.log(response.data);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  blogposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const blogpostsSlice = createSlice({
  name: 'blogposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncblogposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncblogposts.fulfilled]:
     (state, { payload }) => ({ ...state, blogposts: payload }),
    [fetchAsyncblogposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlogposts = (state) => state.blogposts.blogposts;
const blogpostsReducer = blogpostsSlice.reducer;
export {
  getBlogposts,
  fetchAsyncblogposts,
};
export default blogpostsReducer;
