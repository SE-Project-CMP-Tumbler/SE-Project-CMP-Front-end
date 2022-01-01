import { createAsyncThunk } from '@reduxjs/toolkit';
// import { api, apiR, MOCK, SERVICETYPE,} from '../../apis/globalAPI';
import axios from 'axios';
import { api, apiR } from '../../apis/globalAxpi';
import { MOCK, SERVICETYPE, apiREAL } from '../../apis/globalAPI';

/**
 * this function is used to fetch the fFollowing of the User
 * @method
 * @name
 * fetchFollowing
 * @param {object} User  the loged in user
 * @returns {object} all Following of this user
 */

export const fetchFollowing = createAsyncThunk('Follow/fetchFollowing', async (User) => {
  try {
    console.log(User.accessToken);
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/followings');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.get('/followings', {
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

export const followBlogsearch = createAsyncThunk('Follow/followBlogsearch', async ({ tofollow, User }) => {
  try {
    console.log(tofollow);
    let payload = null;
    if (SERVICETYPE === MOCK) {
      const response = await api.post('/follow_blog_search');
      payload = { res: response.data, tofollow };
      return payload;
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/follow_blog_search`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        blog_value: tofollow,
      },
    });
    console.log(response.data);
    payload = { res: response.data, tofollow };
    return payload;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

export const unfollow = createAsyncThunk('Follow/toggleFollowState', async ({ blogId, User }) => {
  try {
    console.log(blogId);
    if (SERVICETYPE === MOCK) {
      const response = await api.delete(`/following/${blogId}`);
      return response.data;
    }
    const response = await apiR.delete(`/follow_blog/${blogId}`, {
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

export const zero = 0;
