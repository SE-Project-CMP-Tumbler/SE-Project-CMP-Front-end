import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const createBlog = createAsyncThunk(
  'newTumblr/createBlog',
  // eslint-disable-next-line camelcase
  async (inputData) => {
    const { title, username } = inputData;
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.post('blog', {
          title, blog_username: username, password: '', avatar: '',
        });
        console.log('Hooray!');
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    } else {
      return 0;
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
