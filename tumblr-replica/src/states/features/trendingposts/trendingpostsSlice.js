import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsynctrendingposts = createAsyncThunk(
  'posts/trending',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('trendingposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/trending');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const fetchAsyncnextposts = createAsyncThunk(
  'posts/trending/next',
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
  trendingposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const trendingpostsSlice = createSlice({
  name: 'trendingposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynctrendingposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctrendingposts.fulfilled]:
     (state, { payload }) => ({ ...state, trendingposts: payload }),
    [fetchAsynctrendingposts.rejected]:
    (state) => ({ ...state, trendingposts: { ...state.trendingposts, error: true } }),
    [fetchAsyncnextposts.fulfilled]:
     (state, { payload }) => ({
       ...state,
       trendingposts: {
         ...state.trendingposts,
         response:
         {
           posts: [...state.trendingposts.response.posts, payload.response.posts],
           pagination: payload.response.pagination,
         },
       },
     }),
  },
});

const getTrendingposts = (state) => state.trendingposts.trendingposts;
const trendingpostsReducer = trendingpostsSlice.reducer;
export {
  getTrendingposts,
  fetchAsynctrendingposts,
  fetchAsyncnextposts,
};
export default trendingpostsReducer;
