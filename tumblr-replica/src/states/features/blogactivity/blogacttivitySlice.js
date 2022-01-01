import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch the activity for the blog number of posts follower following...
 * @method
 * @param {number} Blogid
 * @return {Object} response of the request
*/
const fetchAsyncblogactivity = createAsyncThunk(
  'blog_activity/:blog_id',
  async (Blogid, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('blogactivity');
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
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get(`blog_activity/${Blogid}`, { headers: { Authorization: AuthStr } });
        console.log(response.data);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  blogactivity: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
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
    [fetchAsyncblogactivity.rejected]:
    (state) => ({ ...state, blogactivity: { ...state.blogactivity, error: true } }),
  },
});

const getBlogactivity = (state) => state.blogactivity.blogactivity;
const blogactivityreducer = blogactivitySlice.reducer;
export {
  getBlogactivity,
  fetchAsyncblogactivity,
};
export default blogactivityreducer;
