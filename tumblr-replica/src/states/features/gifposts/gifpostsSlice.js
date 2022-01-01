import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

/**
 * function that fetch the gif posts from the Mock
 * @method
 * @return {Object} response of the request
*/
const fetchAsyncgifposts = createAsyncThunk(
  'posts/gif',
  async () => {
    const response = await exploreApi.get('gifposts');
    // const response = await exploreApi.get(`posts/gif`);
    return response.data;
  },
);

const initialState = {
  gifposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const gifpostsSlice = createSlice({
  name: 'gifposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncgifposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncgifposts.fulfilled]:
     (state, { payload }) => ({ ...state, gifposts: payload }),
    [fetchAsyncgifposts.rejected]:
    (state) => ({ ...state, gifposts: { ...state.gifposts, error: true } }),
  },
});

const getGifposts = (state) => state.gifposts.gifposts;
const gifpostsReducer = gifpostsSlice.reducer;
export {
  getGifposts,
  fetchAsyncgifposts,
};
export default gifpostsReducer;
