import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsynctagposts = createAsyncThunk(
  'tagged/:tagdescription?sort=sort_type',

  async (dispatch, { getState }) => {
    const { SortType, TagDescription } = dispatch;
    if (SERVICETYPE === MOCK) {
      try {
        const response = SortType === 'recent' ? await api.get(`tagpostsrecent?tag=${TagDescription}&sort=${SortType}`)
          : await api.get(`tagpoststop?tag=${TagDescription}&sort=${SortType}`);
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        console.log(TagDescription, SortType);
        const state = getState();
        console.log(state);
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN);
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get(`tag/posts/${TagDescription}?sort=${SortType}`, { headers: { Authorization: AuthStr } });
        console.log(response.data);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  tagposts: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const tagpostsSlice = createSlice({
  name: 'tagposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynctagposts.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctagposts.fulfilled]: (state, { payload }) => ({ ...state, tagposts: payload }),
    [fetchAsynctagposts.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getTagposts = (state) => state.tagposts.tagposts;
const tagpostsreducer = tagpostsSlice.reducer;
export {
  getTagposts,
  fetchAsynctagposts,
};
export default tagpostsreducer;
