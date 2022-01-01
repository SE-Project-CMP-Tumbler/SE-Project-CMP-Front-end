import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch the image posts from the Api
 * @method
 * @return {Object} response of the request
*/
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

const fetchAsyncnextposts = createAsyncThunk(
  'posts/image/next',
  async (next) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('imageposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get(`posts/image?page=${next}`);
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
    [fetchAsyncnextposts.fulfilled]:
    (state, { payload }) => ({
      ...state,
      imageposts: {
        ...state.imageposts,
        response:
        {
          posts: [...state.imageposts.response.posts, ...payload.response.posts],
          pagination: payload.response.pagination,
        },
      },
    }),
  },
});

const getImageposts = (state) => state.imageposts.imageposts;
const imagepostsReducer = imagepostsSlice.reducer;
export {
  getImageposts,
  fetchAsyncimageposts,
  fetchAsyncnextposts,
};
export default imagepostsReducer;
