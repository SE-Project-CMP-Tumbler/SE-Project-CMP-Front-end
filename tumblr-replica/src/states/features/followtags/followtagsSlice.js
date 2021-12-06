import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncfollowtags = createAsyncThunk(
  'follow_tag',
  async () => {
    const response = await exploreApi.get('follow_tag');
    // const arry = response.data.response.tags;
    // console.log(response.data);
    for (let i = 0; i < response.data.response.tags.length; i += 1) {
      // console.log(response.data.response.tags[i]);
      response.data.response.tags[i].follow = true;
    }
    // console.log(response.data);
    return response.data;
  },
);

const DeleteAsyncfollowtags = createAsyncThunk(
  'follow_tag/:tag_description',
  async (TagDescription) => {
    const response = await exploreApi.delete(`follow_tag/:${TagDescription}`);
    return response.data;
  },
);

const AddAsyncfollowtags = createAsyncThunk(
  'follow_tag/:tag_description',
  async (TagDescription) => {
    const response = await exploreApi.post(`follow_tag/:${TagDescription}`);
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
    /* [DeleteAsyncfollowtags.pending]: (state, { meta }) => {
      console.log(state.response);
      for (let i = 0; i < state.response.tags.length; i += 1) {
        if (state.response.tags[i].tag_description === meta.arg) {
          state.response.tags[i].follow = false;
        }
      }
      console.log(state.response.tags);
    }, */
    [DeleteAsyncfollowtags.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    [DeleteAsyncfollowtags.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getAllfollowtags = (state) => state.followtags.followtags;
const followreducer = followtagsSlice.reducer;
export {
  getAllfollowtags,
  fetchAsyncfollowtags,
  DeleteAsyncfollowtags,
  AddAsyncfollowtags,
};
export default followreducer;
