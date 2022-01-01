import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch RandomPost
 * @method
 * @return {Object} response of the request
*/
const fetchAsyncrandomposts = createAsyncThunk(
  'posts/random_posts',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('randomposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/random_posts');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const fetchAsyncnextposts = createAsyncThunk(
  'posts/random_posts/next',
  async (next) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('randomposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get(`posts/random_posts?page=${next}`);
        console.log(response.data);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  randomposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const randompostsSlice = createSlice({
  name: 'randomposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncrandomposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncrandomposts.fulfilled]: (state, { payload }) => ({ ...state, randomposts: payload }),
    [fetchAsyncrandomposts.rejected]:
    (state) => ({ ...state, randomposts: { ...state.randomposts, error: true } }),
    [fetchAsyncnextposts.fulfilled]:
    (state, { payload }) => ({
      ...state,
      randomposts: {
        ...state.randomposts,
        response:
        {
          posts: [...state.randomposts.response.posts, ...payload.response.posts],
          pagination: payload.response.pagination,
        },
      },
    }),
  },
});

const getRandomposts = (state) => state.randomposts.randomposts;
const randompostsReducer = randompostsSlice.reducer;
export {
  getRandomposts,
  fetchAsyncrandomposts,
  fetchAsyncnextposts,
};
export default randompostsReducer;
