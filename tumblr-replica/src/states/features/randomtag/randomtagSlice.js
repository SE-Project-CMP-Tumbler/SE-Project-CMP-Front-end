import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

/**
 * function that fetch Random Tags
 * @method
 * @return {Object} response of the request
*/
const fetchAsyncrandomtags = createAsyncThunk(
  'tag/suggesting',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('randomtags');
        for (let i = 0; i < response.data.response.tags.length; i += 1) {
          response.data.response.tags[i].follow = false;
          response.data.response.tags[i].randomcolor = `#${Math.floor(Math.random() * 16777000).toString(16)}`;
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
        const response = await apiR.get('tag/suggesting', { headers: { Authorization: AuthStr } });
        console.log(response.data);
        for (let i = 0; i < response.data.response.tags.length; i += 1) {
          response.data.response.tags[i].follow = false;
          response.data.response.tags[i].randomcolor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const fetchAsyncnextcards = createAsyncThunk(
  'tag/suggesting/next',
  async (next, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('randomtags');
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
        const response = await apiR.get(`tag/suggesting?page=${next}`, { headers: { Authorization: AuthStr } });
        console.log(response.data);
        for (let i = 0; i < response.data.response.tags.length; i += 1) {
          response.data.response.tags[i].follow = false;
          response.data.response.tags[i].randomcolor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  randomtag: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const randomtagSlice = createSlice({
  name: 'randomtag',
  initialState,
  reducers: {
    unfollowtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.randomtag.response.tags.length; i += 1) {
        if (newstate.randomtag.response.tags[i].tag_description === action.payload) {
          newstate.randomtag.response.tags[i].follow = false;
          break;
        }
      }
    },
    followtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.randomtag.response.tags.length; i += 1) {
        if (newstate.randomtag.response.tags[i].tag_description === action.payload) {
          newstate.randomtag.response.tags[i].follow = true;
          break;
        }
      }
    },
  },
  extraReducers: {
    [fetchAsyncrandomtags.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncrandomtags.fulfilled]: (state, { payload }) => ({ ...state, randomtag: payload }),
    [fetchAsyncrandomtags.rejected]:
    (state) => ({ ...state, randomtag: { ...state.randomtag, error: true } }),
    [fetchAsyncnextcards.fulfilled]:
    (state, { payload }) => ({
      ...state,
      randomtag: {
        ...state.randomtag,
        response:
        {
          tags: [...state.randomtag.response.tags, ...payload.response.tags],
          pagination: payload.response.pagination,
        },
      },
    }),
    [fetchAsyncnextcards.rejected]: () => {
      // console.log('Pending');
    },
  },
});

const getRandomtags = (state) => state.randomtag.randomtag;
export const { unfollowtag, followtag } = randomtagSlice.actions;
const randomtagReducer = randomtagSlice.reducer;
export {
  getRandomtags,
  fetchAsyncrandomtags,
  fetchAsyncnextcards,
};
export default randomtagReducer;
