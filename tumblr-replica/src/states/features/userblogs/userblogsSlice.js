import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchBlogs = createAsyncThunk(
  'blogs/userblogss',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('getblogs22');
        console.log(response.data);
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
        const response = await apiR.get('blog', { headers: { Authorization: AuthStr } });
        console.log(response.data);
        for (let i = 0; i < response.data.response.tags.length; i += 1) {
          response.data.response.tags[i].follow = true;
        }
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  userblogs: {
    response: {},
    meta: { status: '000', msg: 'Loading' },
  },
  currentblog: '',
};

const userblogsSlice = createSlice({
  name: 'userblogs',
  initialState,
  reducers: {
    setcurrentblog: (state, action) => {
      const newstate = state;
      newstate.currentblog = action.payload;
    },
  },
  extraReducers: {
    [fetchBlogs.pending]: () => {
      // console.log('Pending');
    },
    [fetchBlogs.fulfilled]: (state, { payload }) => ({ ...state, userblogs: payload }),
    [fetchBlogs.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getBlogId = (state) => {
  const blogname = state.userblogs.currentblog;
  console.log(state);
  if (state.userblogs && state.userblogs.userblogs.response.blogs) {
    for (let i = 0; i < state.userblogs.userblogs.response.blogs.length; i += 1) {
      if (state.userblogs.userblogs.response.blogs[i].username === blogname) {
        return state.userblogs.userblogs.response.blogs[i].id;
      }
    }
  }
  return 0;
};
const getBlogs = (state) => state.userblogs.userblogs;
export const { setcurrentblog } = userblogsSlice.actions;
const userblogsReducer = userblogsSlice.reducer;
export {
  getBlogs,
  getBlogId,
  fetchBlogs,
};
export default userblogsReducer;
