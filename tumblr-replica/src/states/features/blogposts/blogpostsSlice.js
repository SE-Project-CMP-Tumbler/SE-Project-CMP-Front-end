import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch the Posts for the blog
 * @method
 * @param {number} BlogId
 * @return {Object} response of the request
*/
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

const fetchAsyncnextposts = createAsyncThunk(
  'posts/{blog_id}/next',
  async (dispatch, { getState }) => {
    const { next, BlogId } = dispatch;
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
        const response = await apiR.get(`post/submission/${BlogId}?page=${next}`, { headers: { Authorization: AuthStr } });
        console.log(response.data);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  blogposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
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
    [fetchAsyncblogposts.rejected]:
    (state) => ({ ...state, blogposts: { ...state.blogposts, error: true } }),
    [fetchAsyncnextposts.fulfilled]:
     (state, { payload }) => ({
       ...state,
       blogposts: {
         ...state.blogposts,
         response:
         {
           posts: [...state.blogposts.response.posts, ...payload.response.posts],
           pagination: payload.response.pagination,
         },
       },
     }),
  },
});

const getBlogposts = (state) => state.blogposts.blogposts;
const blogpostsReducer = blogpostsSlice.reducer;
export {
  getBlogposts,
  fetchAsyncblogposts,
  fetchAsyncnextposts,
};
export default blogpostsReducer;
