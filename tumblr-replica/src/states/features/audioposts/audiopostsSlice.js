import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncaudioposts = createAsyncThunk(
  'posts/audio',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('audioposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/audio');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const fetchAsyncnextposts = createAsyncThunk(
  'posts/audio/next',
  async (next) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('audioposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get(`posts/audio?page=${next}`);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  audioposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const audiopostsSlice = createSlice({
  name: 'audioposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncaudioposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncaudioposts.fulfilled]:
     (state, { payload }) => ({ ...state, audioposts: payload }),
    [fetchAsyncaudioposts.rejected]:
    (state) => ({ ...state, audioposts: { ...state.audioposts, error: true } }),
    [fetchAsyncnextposts.fulfilled]:
     (state, { payload }) => ({
       ...state,
       audioposts: {
         ...state.audioposts,
         response:
         {
           posts: [...state.audioposts.response.posts, ...payload.response.posts],
           pagination: payload.response.pagination,
         },
       },
     }),
  },
});

const getAudioposts = (state) => state.audioposts.audioposts;
const audiopostsReducer = audiopostsSlice.reducer;
export {
  getAudioposts,
  fetchAsyncaudioposts,
  fetchAsyncnextposts,
};
export default audiopostsReducer;
