import { createAsyncThunk } from '@reduxjs/toolkit';
// import { apiR } from '../../apis/globalAxpi';
import axios from 'axios';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const createBlog = createAsyncThunk(
  'newTumblr/createBlog',
  // eslint-disable-next-line camelcase
  async (dispatch, { getState }) => {
    // const { title, url } = arg;
    // console.log('Im wenn', arg);
    if (SERVICETYPE === MOCK) {
      try {
        console.log('Mock not fully supported for POST requests!');
        return 0;
      } catch (e) {
        throw Error(e);
      }
    } else {
      console.log(dispatch, 'Im innn');
      // works correctly.
      console.log(dispatch.url, 'Were all innn');
      // works correctly
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN, 'code here!');
        // works correctly
        const AuthStr = `Bearer ${'USERTOKEN'}`;
        const response = await axios({
          method: 'POST',
          url: 'https://api.dev.tumbler.social/api/blog',
          headers: {
            Authorization: AuthStr,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: {
            title: dispatch.title,
            blog_username: dispatch.url,
            password: 'abc123',
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
