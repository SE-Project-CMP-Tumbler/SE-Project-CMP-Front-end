import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncfollowtags = createAsyncThunk(
  'follow_tag',
  async () => {
    const response = await exploreApi.get('follow_tag');
    return response.data;
  },
);

const initialState = {
  followtags: { response: { tags: [] }, meta: { status: '000', msg: 'Loading' } },
};

const followtagsSlice = createSlice({
  name: 'followtags',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncfollowtags.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncfollowtags.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    // console.log('Fetched Successfully');
    [fetchAsyncfollowtags.rejected]: () => {
    // console.log('Rejected!');
    },
  },
});

const getAllfollowtags = (state) => state.followtags.followtags;
const followreducer = followtagsSlice.reducer;
export {
  getAllfollowtags,
  fetchAsyncfollowtags,
};
export default followreducer;
