import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsynctagposts = createAsyncThunk(
  'tagged/:tagdescription?sort=sort_type',
  async ({ TagDescription, SortType }) => {
    const response = SortType === 'recent' ? await exploreApi.get(`tagpostsrecent?tag=${TagDescription}&sort=${SortType}`)
      : await exploreApi.get(`tagpoststop?tag=${TagDescription}&sort=${SortType}`);
    // const response = await exploreApi.get(`tag/posts/${TagDescription}?sort=${SortType}`);
    return response.data;
  },
);

const initialState = {
  tagposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const tagpostsSlice = createSlice({
  name: 'tagposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynctagposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctagposts.fulfilled]: (state, { payload }) => ({ ...state, tagposts: payload }),
    [fetchAsynctagposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getTagposts = (state) => state.tagposts.tagposts;
const tagpostsreducer = tagpostsSlice.reducer;
export {
  getTagposts,
  fetchAsynctagposts,
};
export default tagpostsreducer;
