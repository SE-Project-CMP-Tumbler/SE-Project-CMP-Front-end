import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncrandomtags = createAsyncThunk(
  'tag/suggesting',
  async () => {
    const response = await exploreApi.get('randomtags');
    // const response = await exploreApi.get(`tag/suggesting`);
    for (let i = 0; i < response.data.response.tags.length; i += 1) {
      response.data.response.tags[i].follow = false;
      response.data.response.tags[i].randomcolor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    return response.data;
  },
);

const DeleteAsyncfollowtags = async (TagDescription) => {
  const response = await exploreApi.get(`deletfollowtag?${TagDescription}`);
  // const response = await exploreApi.delete(`follow_tag/:${TagDescription}`);
  return response.data;
};

const AddAsyncfollowtags = async (TagDescription) => {
  const response = await exploreApi.get(`deletfollowtag?${TagDescription}`);
  // const response = await exploreApi.post(`follow_tag/:${TagDescription}`);
  return response.data;
};

const initialState = {
  randomtag: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const randomtagSlice = createSlice({
  name: 'randomtag',
  initialState,
  reducers: {
    unfollowtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.randomtag.response.tags.length; i += 1) {
        if (newstate.randomtag.response.tags[i].tag_description === action.payload) {
          newstate.randomtag.response.tags[i].follow = false;
          break;
        }
      }
      DeleteAsyncfollowtags(action.payload);
    },
    followtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.randomtag.response.tags.length; i += 1) {
        if (newstate.randomtag.response.tags[i].tag_description === action.payload) {
          newstate.randomtag.response.tags[i].follow = true;
          break;
        }
      }
      AddAsyncfollowtags(action.payload);
    },
  },
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
export const { unfollowtag, followtag } = randomtagSlice.actions;
const randomtagReducer = randomtagSlice.reducer;
export {
  getRandomtags,
  fetchAsyncrandomtags,
};
export default randomtagReducer;
