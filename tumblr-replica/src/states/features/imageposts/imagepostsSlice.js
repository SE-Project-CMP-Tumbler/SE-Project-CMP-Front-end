import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncimageposts = createAsyncThunk(
  'posts/image',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('imageposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/image');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  imageposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
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
    [fetchAsyncimageposts.rejected]:
    (state) => ({ ...state, imageposts: { ...state.imageposts, error: true } }),
  },
});

const getImageposts = (state) => state.imageposts.imageposts;
const imagepostsReducer = imagepostsSlice.reducer;
export {
  getImageposts,
  fetchAsyncimageposts,
};
export default imagepostsReducer;
