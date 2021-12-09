import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncdraftposts = createAsyncThunk(
  'posts/{draft_id}',
  async (blogId) => {
    const response = await exploreApi.get(`draftposts?${blogId}`);
    // const response = await exploreApi.get(`post/${blogId}/draft`);
    return response.data;
  },
);

const initialState = {
  draftposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const draftpostsSlice = createSlice({
  name: 'draftposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncdraftposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncdraftposts.fulfilled]:
     (state, { payload }) => ({ ...state, draftposts: payload }),
    [fetchAsyncdraftposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getDraftposts = (state) => state.draftposts.draftposts;
const draftpostsReducer = draftpostsSlice.reducer;
export {
  getDraftposts,
  fetchAsyncdraftposts,
};
export default draftpostsReducer;
