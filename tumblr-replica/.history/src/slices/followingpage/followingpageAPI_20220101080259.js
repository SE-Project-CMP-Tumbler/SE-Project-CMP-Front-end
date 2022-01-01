import { createAsyncThunk } from '@reduxjs/toolkit';
// import { api, apiR, MOCK, SERVICETYPE,} from '../../apis/globalAPI';
import axios from 'axios';
import { api, apiR } from '../../apis/globalAxpi';
import { MOCK, SERVICETYPE, apiREAL } from '../../apis/globalAPI';

/**
 * this function is used to fetch the Following of the User
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

/**
 * this function is used to search for blog to follow
 * @method
 * @name
 * followBlogsearch
 * @param {string} tofollow  the name of the blog you search for
 * @param {object} User  the loged in user
 * @returns {object} the reaponse with success if the follow request done successfully
 */

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

/**
 * this function is used to unfollow spacific blog
 * @method
 * @name
 * unfollow
 * @param {string} blogId  the id of the blog you want to unfollow
 * @param {object} User  the loged in user
 * @returns {object} return the response (succeeded or fail)
 */
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
