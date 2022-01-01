import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch the Trendng Tag
 * @method
 * @return {Object} response of the request
*/
const fetchAsynctrendtags = createAsyncThunk(
  'tag/trending',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('trending');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('tag/trending');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  trendtag: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const trendtagSlice = createSlice({
  name: 'trendtag',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynctrendtags.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctrendtags.fulfilled]: (state, { payload }) => ({ ...state, trendtag: payload }),
    [fetchAsynctrendtags.rejected]:
    (state) => ({ ...state, trendtag: { ...state.trendtag, error: true } }),
  },
});

const getTrendtags = (state) => state.trendtag.trendtag;
const trendtagReducer = trendtagSlice.reducer;
export {
  getTrendtags,
  fetchAsynctrendtags,
};
export default trendtagReducer;
