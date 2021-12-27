import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const fetchBlogs = createAsyncThunk(
  'userBlogs/fetchBlogs',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('blog');
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get('blog', { headers: { Authorization: AuthStr } });
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
