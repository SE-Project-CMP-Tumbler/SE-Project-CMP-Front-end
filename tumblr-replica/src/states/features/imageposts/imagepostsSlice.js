import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncimageposts = createAsyncThunk(
  'posts/image',
  async () => {
    const response = await exploreApi.get('imageposts');
    // const response = await exploreApi.get(`posts/image`);
    return response.data;
  },
);

const initialState = {
  imageposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const imagepostsSlice = createSlice({
  name: 'imageposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncimageposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncimageposts.fulfilled]:
     (state, { payload }) => ({ ...state, imageposts: payload }),
    [fetchAsyncimageposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getImageposts = (state) => state.imageposts.imageposts;
const imagepostsReducer = imagepostsSlice.reducer;
export {
  getImageposts,
  fetchAsyncimageposts,
};
export default imagepostsReducer;
