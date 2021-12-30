import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const EditPost = createAsyncThunk(
  'DashPosts/CreatePost',
  async ({ postBody, postID, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'PUT',
        url: `${api}/post/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          post_status: 'puplished',
          post_type: 'general',
          post_body: postBody,
        },
      });
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'PUT',
        url: `${apiR}/post/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          post_status: 'published',
          post_type: 'general',
          post_body: `<div> ${postBody} </div>`,
        },
      });

      return response.data;
    } catch {
      return [];
    }
  },
);

export default EditPost;
