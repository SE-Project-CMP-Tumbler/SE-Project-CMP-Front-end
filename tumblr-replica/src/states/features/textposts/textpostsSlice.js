import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsynctextposts = createAsyncThunk(
  'posts/text',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('textposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('posts/text');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  textposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const textpostsSlice = createSlice({
  name: 'textposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynctextposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctextposts.fulfilled]:
     (state, { payload }) => ({ ...state, textposts: payload }),
    [fetchAsynctextposts.rejected]:
    (state) => ({ ...state, textposts: { ...state.textposts, error: true } }),
  },
});

const getTextposts = (state) => state.textposts.textposts;
const textpostsReducer = textpostsSlice.reducer;
export {
  getTextposts,
  fetchAsynctextposts,
};
export default textpostsReducer;
