import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const fetchStuff = createAsyncThunk(
  'searchStuff/fetchStuff',
  async (word) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('blog');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const response = await apiR.get('search/' + word);
        console.log(response.data, 'Works From Search');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
