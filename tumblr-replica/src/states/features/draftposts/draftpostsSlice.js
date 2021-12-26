import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncdraftposts = createAsyncThunk(
  'post/{blogId}/draft',
  async (blogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('draftposts');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        console.log(state);
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN);
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get(`post/${blogId}/draft`, { headers: { Authorization: AuthStr } });
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  draftposts: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const draftpostsSlice = createSlice({
  name: 'draftposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncdraftposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncdraftposts.fulfilled]:
     (state, { payload }) => ({ ...state, draftposts: payload }),
    [fetchAsyncdraftposts.rejected]:
    (state) => ({ ...state, draftposts: { ...state.draftposts, error: true } }),
  },
});

const getDraftposts = (state) => state.draftposts.draftposts;
const draftpostsReducer = draftpostsSlice.reducer;
export {
  getDraftposts,
  fetchAsyncdraftposts,
};
export default draftpostsReducer;
