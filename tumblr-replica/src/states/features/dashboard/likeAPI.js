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
      console.log(response.data, postID);
      return response.data;
    }
    try {
      console.log(`${apiR}/post/like/${postID}`);
      const response = await Axios({
        method: 'POST',
        url: `${apiR}/post/like/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log('bla');
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err, postID);
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
      console.log(response.data);
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
      console.log('bla');
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
);

export { UnlikePost, LikePost };
