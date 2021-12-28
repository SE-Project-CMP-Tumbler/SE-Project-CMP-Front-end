import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncfollowtags = createAsyncThunk(
  'follow_tag',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('follow_tag');
        for (let i = 0; i < response.data.response.tags.length; i += 1) {
          response.data.response.tags[i].follow = true;
        }
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
        const response = await apiR.get('follow_tag', { headers: { Authorization: AuthStr } });
        console.log(response.data);
        for (let i = 0; i < response.data.response.tags.length; i += 1) {
          response.data.response.tags[i].follow = true;
        }
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  followtags: { response: { tags: [] }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const followtagsSlice = createSlice({
  name: 'followtags',
  initialState,
  reducers: {
    unfollowtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.followtags.response.tags.length; i += 1) {
        if (newstate.followtags.response.tags[i].tag_description === action.payload) {
          newstate.followtags.response.tags[i].follow = false;
          break;
        }
      }
    },
    followtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.followtags.response.tags.length; i += 1) {
        if (newstate.followtags.response.tags[i].tag_description === action.payload) {
          newstate.followtags.response.tags[i].follow = true;
          break;
        }
      }
    },
  },
  extraReducers: {
    [fetchAsyncfollowtags.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncfollowtags.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    // console.log('Fetched Successfully');
    [fetchAsyncfollowtags.rejected]:
    (state) => ({ ...state, followtags: { ...state.followtags, error: true } }),
  },
});

const getAllfollowtags = (state) => state.followtags.followtags;
export const { unfollowtag, followtag } = followtagsSlice.actions;
const followreducer = followtagsSlice.reducer;
export {
  getAllfollowtags,
  fetchAsyncfollowtags,
};
export default followreducer;
