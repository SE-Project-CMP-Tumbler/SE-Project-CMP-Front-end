import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncbloginfo = createAsyncThunk(
  'blog/:blog_id',
  async (BlogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('bloginfo');
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
        const response = await apiR.get(`blog/${BlogId}`, { headers: { Authorization: AuthStr } });
        console.log(response.data);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  bloginfo: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const bloginfoSlice = createSlice({
  name: 'bloginfo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncbloginfo.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncbloginfo.fulfilled]:
     (state, { payload }) => ({ ...state, bloginfo: payload }),
    [fetchAsyncbloginfo.rejected]:
    (state) => ({ ...state, blogactivity: { ...state.blogactivity, error: true } }),
  },
});

const getBloginfo = (state) => state.bloginfo.bloginfo;
const bloginforeducer = bloginfoSlice.reducer;
export {
  getBloginfo,
  fetchAsyncbloginfo,
};
export default bloginforeducer;
