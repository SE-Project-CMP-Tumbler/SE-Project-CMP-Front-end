import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const GetBlogId = createAsyncThunk(
  'DashPosts/getblogid',
  async ({ User, blogUsername }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'GET',
        url: `${api}/blog/info/${blogUsername}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.data.meta.status === '200') {
        return response.data.response;
      }
      return [];
    }
    try {
      console.log(User, 'get blog id from username');
      const response = await Axios({
        method: 'GET',
        url: `${apiR}/blog/info/${blogUsername}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.data.meta.status === '200') {
        return response.data.response;
      }
      return [];
    } catch (err) {
      console.log(err.message);
      return [];
    }
  },
);
export default GetBlogId;
