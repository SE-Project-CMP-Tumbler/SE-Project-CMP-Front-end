import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';
/**
 * function that fetch the ask posts from the Api
 * @method
 * @return {Object} response of the request
*/
const fetchAsyncaskposts = createAsyncThunk(
  'posts/ask',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('askposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/ask');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

/**
 * function that fetch the ask posts from the Api acording to the page
 * @method
 * @param {number} next number of page
 * @return {Object} response of the request
*/
const fetchAsyncnextposts = createAsyncThunk(
  'posts/ask/next',
  async (next) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('askposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get(`posts/ask?page=${next}`);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  askposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const askpostsSlice = createSlice({
  name: 'askposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncaskposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncaskposts.fulfilled]:
     (state, { payload }) => ({ ...state, askposts: payload }),
    [fetchAsyncaskposts.rejected]: () => {
      // console.log('Rejected!');
    },
    [fetchAsyncnextposts.fulfilled]:
     (state, { payload }) => ({
       ...state,
       askposts: {
         ...state.askposts,
         response:
         {
           posts: [...state.askposts.response.posts, ...payload.response.posts],
           pagination: payload.response.pagination,
         },
       },
     }),
  },
});

const getAskposts = (state) => state.askposts.askposts;
const askpostsReducer = askpostsSlice.reducer;
export {
  getAskposts,
  fetchAsyncaskposts,
  fetchAsyncnextposts,
};
export default askpostsReducer;
