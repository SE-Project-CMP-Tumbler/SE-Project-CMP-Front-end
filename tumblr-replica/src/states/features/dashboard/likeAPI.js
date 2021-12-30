import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const LikePost = createAsyncThunk(
  'DashPosts/CreatePost',
  async ({ postID, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'POST',
        url: `${api}/like`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          post_id: postID,
        },
      });
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'POST',
        url: `${apiR}/post/like/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch {
      return [];
    }
  },
);

const UnlikePost = createAsyncThunk(
  'DashPosts/UnlikePost',
  async ({ postID, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'DELETE',
        url: `${api}/like/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'DELETE',
        url: `${apiR}/post/like/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch {
      return [];
    }
  },
);

export { UnlikePost, LikePost };
