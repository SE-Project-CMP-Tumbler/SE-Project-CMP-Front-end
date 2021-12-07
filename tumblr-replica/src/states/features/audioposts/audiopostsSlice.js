import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncaudioposts = createAsyncThunk(
  'posts/audio',
  async () => {
    const response = await exploreApi.get('audioposts');
    // const response = await exploreApi.get(`posts/audio`);
    return response.data;
  },
);

const initialState = {
  audioposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const audiopostsSlice = createSlice({
  name: 'audioposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncaudioposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncaudioposts.fulfilled]:
     (state, { payload }) => ({ ...state, audioposts: payload }),
    [fetchAsyncaudioposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getAudioposts = (state) => state.audioposts.audioposts;
const audiopostsReducer = audiopostsSlice.reducer;
export {
  getAudioposts,
  fetchAsyncaudioposts,
};
export default audiopostsReducer;
