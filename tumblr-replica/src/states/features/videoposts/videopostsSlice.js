import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncvideoposts = createAsyncThunk(
  'posts/video',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('videoposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/video');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const fetchAsyncnextposts = createAsyncThunk(
  'posts/video/next',
  async (next) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('trendingposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get(`posts/trending?page=${next}`);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  videoposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const videopostsSlice = createSlice({
  name: 'videoposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncvideoposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncvideoposts.fulfilled]:
     (state, { payload }) => ({ ...state, videoposts: payload }),
    [fetchAsyncvideoposts.rejected]:
    (state) => ({ ...state, videoposts: { ...state.videoposts, error: true } }),
    [fetchAsyncnextposts.fulfilled]:
     (state, { payload }) => ({
       ...state,
       videoposts: {
         ...state.videoposts,
         response:
         {
           posts: [...state.videoposts.response.posts, payload.response.posts],
           pagination: payload.response.pagination,
         },
       },
     }),
  },
});

const getVideoposts = (state) => state.videoposts.videoposts;
const videopostsReducer = videopostsSlice.reducer;
export {
  getVideoposts,
  fetchAsyncvideoposts,
  fetchAsyncnextposts,
};
export default videopostsReducer;
