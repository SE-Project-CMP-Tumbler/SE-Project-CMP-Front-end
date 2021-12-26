import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncvideoposts = createAsyncThunk(
  'posts/video',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('videoposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/video');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  videoposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
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
    [fetchAsyncvideoposts.rejected]:
    (state) => ({ ...state, videoposts: { ...state.videoposts, error: true } }),
  },
});

const getVideoposts = (state) => state.videoposts.videoposts;
const videopostsReducer = videopostsSlice.reducer;
export {
  getVideoposts,
  fetchAsyncvideoposts,
};
export default videopostsReducer;
