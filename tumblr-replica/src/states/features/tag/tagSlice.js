import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch Information about Tag
 * @method
 * @param {string} TagDescription
 * @return {Object} response of the request
*/
const fetchAsynctag = createAsyncThunk(
  'tagged/:tagdescription',
  async (TagDescription, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('tag');
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
        const response = await apiR.get(`tag/data/${TagDescription}`, { headers: { Authorization: AuthStr } });
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

/**
 * function that Post request to unfollow tag
 * @method
 * @param {string} TagDescription
 * @return {Object} response of the request
*/
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
        const response = await Axios({
          method: 'DELETE',
          url: `https://api.dev.tumbler.social/api/follow_tag/${TagDescription}`,
          headers: {
            Authorization: AuthStr,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

/**
 * function that Post request to follow tag
 * @method
 * @param {string} TagDescription
 * @return {Object} response of the request
*/
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
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await Axios({
          method: 'POST',
          url: `https://api.dev.tumbler.social/api/follow_tag/${TagDescription}`,
          headers: {
            Authorization: AuthStr,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  tag: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
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
    [fetchAsynctag.rejected]:
    (state) => ({ ...state, tag: { ...state.tag, error: true } }),
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
