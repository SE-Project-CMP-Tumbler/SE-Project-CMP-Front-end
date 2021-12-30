import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const CreatePost = createAsyncThunk(
  'DashPosts/CreatePost',
  async ({ postBody, User, postType }) => {
    console.log(postType);
    const d = new Date();
    const time = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'POST',
        url: `${api}/createdpost`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          post_status: 'puplished',
          post_time: time,
          post_type: { postType },
          post_body: postBody,
        },
      });
      console.log(response.data);
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'POST',
        url: `${apiR}/post/${User.primaryBlogId}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          post_status: 'published',
          post_time: time,
          post_type: postType,
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

export default CreatePost;
