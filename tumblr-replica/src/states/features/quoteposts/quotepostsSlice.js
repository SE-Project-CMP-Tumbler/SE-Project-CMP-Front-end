import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncquoteposts = createAsyncThunk(
  'posts/quote',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('quoteposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/quote');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  quoteposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
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
    [fetchAsyncquoteposts.rejected]:
    (state) => ({ ...state, quoteposts: { ...state.quoteposts, error: true } }),
  },
});

const getQuoteposts = (state) => state.quoteposts.quoteposts;
const quotepostsReducer = quotepostsSlice.reducer;
export {
  getQuoteposts,
  fetchAsyncquoteposts,
};
export default quotepostsReducer;
