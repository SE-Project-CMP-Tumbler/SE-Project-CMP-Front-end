import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

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
