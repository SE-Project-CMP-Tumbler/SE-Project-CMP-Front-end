import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (dispatch, { getState }) => {
    if (SERVICETYPE !== MOCK) {
      try {
        console.log('tryinnnnnng');
        const response = await api.get('notifications');
        console.log(response.data, 'the datatatata');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
      // wont 'work
        console.log('There we go!');
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get('notifications', { headers: { Authorization: AuthStr } });
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
