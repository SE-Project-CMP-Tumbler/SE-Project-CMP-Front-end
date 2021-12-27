import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsynctag = createAsyncThunk(
  'tagged/:tagdescription',
  async (TagDescription) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('tag');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get(`tag/data/${TagDescription}`);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const DeleteAsyncfollowtags = createAsyncThunk(
  'unfollowtag/tagcard',
  async (TagDescription, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('deletfollowtag');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.delete(`follow_tag/${TagDescription}`, { headers: { Authorization: AuthStr } });
        console.log(response);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const AddAsyncfollowtags = createAsyncThunk(
  'followtag/tagcard',
  async (TagDescription, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('deletfollowtag');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN);
        console.log(TagDescription);
        const response = await apiR.post(`follow_tag/${TagDescription}`, { headers: { Authorization: `Bearer ${USERTOKEN}` } });
        console.log(response);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  tag: { response: { }, meta: { status: '000', msg: 'Loading' } },
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    unfollowtag: (state) => {
      const newstate = state;
      newstate.tag.response.followed = false;
      DeleteAsyncfollowtags(newstate.tag.response.tag_description);
    },
    followtag: (state) => {
      const newstate = state;
      newstate.tag.response.followed = true;
      // console.log('before');
      // AddAsyncfollowtags(newstate.tag.response.tag_description);
      // console.log('after');
    },
  },
  extraReducers: {
    [fetchAsynctag.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsynctag.fulfilled]: (state, { payload }) => ({ ...state, tag: payload }),
    [fetchAsynctag.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getTaginfo = (state) => state.tag.tag;
export const { unfollowtag, followtag } = tagSlice.actions;
const tagreducer = tagSlice.reducer;
export {
  getTaginfo,
  fetchAsynctag,
  AddAsyncfollowtags,
  DeleteAsyncfollowtags,
};
export default tagreducer;
