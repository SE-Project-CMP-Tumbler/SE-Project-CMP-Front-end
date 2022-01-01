/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('notifications');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const response = await api.get('notifications');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
      // try {
      // // wont 'work
      //   const state = getState();
      //   const USERTOKEN = state.user.user.accessToken;
      //   const AuthStr = `Bearer ${USERTOKEN}`;
      // const response = await apiR.get('notifications', { headers: { Authorization: AuthStr } });
      //   console.log(response.data.response, 'yikesss');
      //   return response.data.response;
      // } catch (e) {
      //   throw Error(e);
      // }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
