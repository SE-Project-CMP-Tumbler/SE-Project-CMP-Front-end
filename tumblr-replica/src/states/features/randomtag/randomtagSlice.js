import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncrandomtags = createAsyncThunk(
  'tag/random_tags',
  async () => {
    const response = await exploreApi.get('randomtags');
    // const response = await exploreApi.get(`tag/random_tags`);
    return response.data;
  },
);

const initialState = {
  randomtag: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const randomtagSlice = createSlice({
  name: 'randomtag',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncrandomtags.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncrandomtags.fulfilled]: (state, { payload }) => ({ ...state, randomtag: payload }),
    [fetchAsyncrandomtags.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getRandomtags = (state) => state.randomtag.randomtag;
const randomtagReducer = randomtagSlice.reducer;
export {
  getRandomtags,
  fetchAsyncrandomtags,
};
export default randomtagReducer;
