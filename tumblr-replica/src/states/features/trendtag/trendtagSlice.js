import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsynctrendtags = createAsyncThunk(
  'tag/trending',
  async () => {
    const response = await exploreApi.get('trending');
    // const response = await exploreApi.get(`tag/trending`);
    return response.data;
  },
);

const initialState = {
  trendtag: { response: { }, meta: { status: '000', msg: 'Loading' } },
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
    [fetchAsynctrendtags.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getTrendtags = (state) => state.trendtag.trendtag;
const trendtagReducer = trendtagSlice.reducer;
export {
  getTrendtags,
  fetchAsynctrendtags,
};
export default trendtagReducer;
