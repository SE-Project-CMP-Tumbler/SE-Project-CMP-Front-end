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

const initialState = {
  tag: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
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
const tagreducer = tagSlice.reducer;
export {
  getTaginfo,
  fetchAsynctag,
};
export default tagreducer;
