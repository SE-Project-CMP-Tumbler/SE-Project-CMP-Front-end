import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncvideoposts = createAsyncThunk(
  'posts/video',
  async () => {
    const response = await exploreApi.get('videoposts');
    // const response = await exploreApi.get(`posts/video`);
    return response.data;
  },
);

const initialState = {
  videoposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const videopostsSlice = createSlice({
  name: 'videoposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncvideoposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncvideoposts.fulfilled]:
     (state, { payload }) => ({ ...state, videoposts: payload }),
    [fetchAsyncvideoposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getVideoposts = (state) => state.videoposts.videoposts;
const videopostsReducer = videopostsSlice.reducer;
export {
  getVideoposts,
  fetchAsyncvideoposts,
};
export default videopostsReducer;
