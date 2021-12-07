import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsynctextposts = createAsyncThunk(
  'posts/text',
  async () => {
    const response = await exploreApi.get('textposts');
    // const response = await exploreApi.get(`posts/text`);
    return response.data;
  },
);

const initialState = {
  textposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const textpostsSlice = createSlice({
  name: 'textposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynctextposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctextposts.fulfilled]:
     (state, { payload }) => ({ ...state, textposts: payload }),
    [fetchAsynctextposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getTextposts = (state) => state.textposts.textposts;
const textpostsReducer = textpostsSlice.reducer;
export {
  getTextposts,
  fetchAsynctextposts,
};
export default textpostsReducer;
