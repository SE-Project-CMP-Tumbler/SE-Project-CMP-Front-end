import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

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
  },
});

const getRandomposts = (state) => state.randomposts.randomposts;
const randompostsReducer = randompostsSlice.reducer;
export {
  getRandomposts,
  fetchAsyncrandomposts,
};
export default randompostsReducer;
