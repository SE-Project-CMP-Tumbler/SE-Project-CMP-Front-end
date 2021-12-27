import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const createBlog = createAsyncThunk(
  'newTumblr/createBlog',
  // eslint-disable-next-line camelcase
  async (arg, thunkAPI) => {
    const { title, url } = arg;
    console.log('Im wenn', arg);
    if (SERVICETYPE === MOCK) {
      try {
        console.log('Mock not fully supported for POST requests!');
        return 0;
      } catch (e) {
        throw Error(e);
      }
    } else {
      console.log(title, 'Im innn');
      // works correctly.
      console.log(url, 'Were all innn');
      // works correctly
      try {
        const state = thunkAPI.getState();
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN, 'code here!');
        // works correctly
        const AuthStr = `Bearer ${'USERTOKEN'}`;
        const response = await apiR.post('blog', {
          title, blog_username: url, password: '',
        }, {
          headers: {
            Authorization: AuthStr,
          },
        });
        console.log(response, 'well met');
        return response.data;
      } catch (e) {
        console.log(e);
        throw Error(e);
      }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
