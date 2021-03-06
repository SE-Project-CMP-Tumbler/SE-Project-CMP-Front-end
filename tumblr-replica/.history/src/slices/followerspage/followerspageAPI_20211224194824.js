import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, apiR } from '../../apis/globalAxpi';
import { MOCK, SERVICETYPE, apiREAL } from '../../apis/globalAPI';

export const fetchFollower = createAsyncThunk('Follower/fetchFollower', async (User) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/followers');
      console.log(User.accessToken);
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.get('/followers', {
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    onsole.log(User.accessToken);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const followedBy = createAsyncThunk('Follower/followedBy', async (blogID) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/followed_by');
      return response?.data;
    }
    const response = await apiR.get(`/followed_by/${blogID}`);
    return response?.data;
  } catch (err) {
    throw Error(err);
  }
});

export const searchFollowblog = createAsyncThunk('Follower/searchFollowblog', async ({ userName, User }) => {
  try {
    console.log(userName);
    let payload = null;
    if (SERVICETYPE === MOCK) {
      const response = await api.get(`/search_follow_blog/${userName}`);
      return { res: response.data, userName };
    }
    const response = await apiR.get(`/search_follow_blog/${userName}`, {
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    payload = { res: response.data, userName };
    return payload;
  } catch (err) {
    throw Error(err);
  }
});

export const follow = createAsyncThunk('Follower/toggleFollowState', async ({ blogId, User }) => {
  try {
    console.log('try to follow');
    if (SERVICETYPE === MOCK) {
      const response = await api.post('/following', { id: blogId });
      return response.data;
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/follow_blog/${blogId}`,
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

export const block = createAsyncThunk('Follower/block', async (blogId) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.post(`/block/${blogId}`);
      return response.data;
    }
    const response = await apiR.post(`/block/${blogId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

export const unBlock = createAsyncThunk('Follower/unBlock', async (blogId) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.delete(`/block/${blogId}`);
      return response.data;
    }
    const response = await apiR.delete(`/block/${blogId}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});
export const zero = 0;
