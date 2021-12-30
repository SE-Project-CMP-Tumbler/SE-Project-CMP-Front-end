import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const fetchStuff = createAsyncThunk(
  'searchStuff/fetchStuff',
  async (word) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('search');
        console.log(response.data);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const response = await apiR.get('search/' + word);
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const fetchAutocomplete = createAsyncThunk(
  'searchAutocomplete/fetchAutocomplete',
  async (input) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('search_auto_complete');
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const word = { input };
        // console.log('search_auto_complete/' + word.input.string);
        const response = await apiR.get('search_auto_complete/' + word.input.string);
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
