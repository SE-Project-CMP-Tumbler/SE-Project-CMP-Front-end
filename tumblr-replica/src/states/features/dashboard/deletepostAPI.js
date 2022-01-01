import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const DeletePost = createAsyncThunk(
  'DashPosts/DeletePost',
  async ({ User, postID }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'DELETE',
        url: `${api}/createdpost/${postID}`,
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
        url: `${apiR}/post/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      return [];
    }
  },
);

export default DeletePost;
