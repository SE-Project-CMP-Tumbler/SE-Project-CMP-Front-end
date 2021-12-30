import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const Reblog = createAsyncThunk(
  'DashPosts/Reblog',
  async ({ postBody, postID, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'POST',
        url: `${api}/reblogs`,
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
      console.log(response.data);
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'POST',
        url: `${apiR}/reblog/${User.primaryBlogId}/${postID}`,
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
      console.log('bla');
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
);

export default Reblog;
