import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const PinPost = createAsyncThunk(
  'DashPosts/CreatePost',
  async ({ postID, User }) => {
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
          blog_id: User.primaryBlogId,
          post_id: postID,
        },
      });
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
          blog_id: User.primaryBlogId,
          post_id: postID,
        },
      });
      return response.data;
    } catch {
      return [];
    }
  },
);

export default PinPost;
