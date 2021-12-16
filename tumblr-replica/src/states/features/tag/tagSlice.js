import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsynctag = createAsyncThunk(
  'tagged/:tagdescription',
  async (TagDescription) => {
    const response = await exploreApi.get(`tag?tag=${TagDescription}`);
    // const response = await exploreApi.get(`tag/data/${TagDescription}`);
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
  tag: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    unfollowtag: (state) => {
      const newstate = state;
      newstate.tag.response.followed = false;
      DeleteAsyncfollowtags(newstate.tag.response.tag_description);
    },
    followtag: (state) => {
      const newstate = state;
      newstate.tag.response.followed = true;
      AddAsyncfollowtags(newstate.tag.response.tag_description);
    },
  },
  extraReducers: {
    [fetchAsynctag.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctag.fulfilled]: (state, { payload }) => ({ ...state, tag: payload }),
    [fetchAsynctag.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getTaginfo = (state) => state.tag.tag;
export const { unfollowtag, followtag } = tagSlice.actions;
const tagreducer = tagSlice.reducer;
export {
  getTaginfo,
  fetchAsynctag,
};
export default tagreducer;
