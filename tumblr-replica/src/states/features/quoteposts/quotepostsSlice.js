import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncquoteposts = createAsyncThunk(
  'posts/quote',
  async () => {
    const response = await exploreApi.get('quoteposts');
    // const response = await exploreApi.get(`posts/quote`);
    return response.data;
  },
);

const initialState = {
  quoteposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const quotepostsSlice = createSlice({
  name: 'quoteposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncquoteposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncquoteposts.fulfilled]:
     (state, { payload }) => ({ ...state, quoteposts: payload }),
    [fetchAsyncquoteposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getQuoteposts = (state) => state.quoteposts.quoteposts;
const quotepostsReducer = quotepostsSlice.reducer;
export {
  getQuoteposts,
  fetchAsyncquoteposts,
};
export default quotepostsReducer;
