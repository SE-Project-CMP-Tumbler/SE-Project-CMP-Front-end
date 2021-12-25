import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncaudioposts = createAsyncThunk(
  'posts/audio',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('audioposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/audio');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
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
