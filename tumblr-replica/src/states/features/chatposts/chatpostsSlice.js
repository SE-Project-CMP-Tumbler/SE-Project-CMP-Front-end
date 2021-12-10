import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncchatposts = createAsyncThunk(
  'posts/chat',
  async () => {
    const response = await exploreApi.get('chatposts');
    // const response = await exploreApi.get(`posts/chat`);
    return response.data;
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
