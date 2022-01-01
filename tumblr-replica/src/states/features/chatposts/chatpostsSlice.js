import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch the chat posts from the Api
 * @method
 * @return {Object} response of the request
*/
const fetchAsyncchatposts = createAsyncThunk(
  'posts/chat',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('chatposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/chat');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const fetchAsyncnextposts = createAsyncThunk(
  'posts/chat/next',
  async (next) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('chatposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get(`posts/chat?page=${next}`);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  chatposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const chatpostsSlice = createSlice({
  name: 'chatposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncchatposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncchatposts.fulfilled]:
     (state, { payload }) => ({ ...state, chatposts: payload }),
    [fetchAsyncchatposts.rejected]:
    (state) => ({ ...state, chatposts: { ...state.chatposts, error: true } }),
    [fetchAsyncnextposts.fulfilled]:
    (state, { payload }) => ({
      ...state,
      chatposts: {
        ...state.chatposts,
        response:
        {
          posts: [...state.chatposts.response.posts, ...payload.response.posts],
          pagination: payload.response.pagination,
        },
      },
    }),
  },
});

const getChatposts = (state) => state.chatposts.chatposts;
const chatpostsReducer = chatpostsSlice.reducer;
export {
  getChatposts,
  fetchAsyncchatposts,
  fetchAsyncnextposts,
};
export default chatpostsReducer;
