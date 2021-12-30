import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const PinPost = createAsyncThunk(
  'DashPosts/CreatePost',
  async ({ blogID, postID, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'PUT',
        url: `${api}/posts/pin`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          blog_id: blogID,
          post_id: postID,
        },
      });
      console.log(response.data);
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'PUT',
        url: `${apiR}/posts/pin`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          blog_id: blogID,
          post_id: postID,
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

export default PinPost;
