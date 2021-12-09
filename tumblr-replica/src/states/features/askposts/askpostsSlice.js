import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncaskposts = createAsyncThunk(
  'posts/ask',
  async () => {
    const response = await exploreApi.get('askposts');
    // const response = await exploreApi.get(`posts/ask`);
    return response.data;
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
  },
});

const getAskposts = (state) => state.askposts.askposts;
const askpostsReducer = askpostsSlice.reducer;
export {
  getAskposts,
  fetchAsyncaskposts,
};
export default askpostsReducer;
