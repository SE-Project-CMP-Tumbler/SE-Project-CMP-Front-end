import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const fetchBlogs = createAsyncThunk(
  'userBlogs/fetchBlogs',
  async () => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('blog');
        return response.data.response;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const response = await apiR.get('blog');
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
