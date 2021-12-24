import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

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

const initialState = {
  chatposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
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
    [fetchAsyncchatposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getChatposts = (state) => state.chatposts.chatposts;
const chatpostsReducer = chatpostsSlice.reducer;
export {
  getChatposts,
  fetchAsyncchatposts,
};
export default chatpostsReducer;
