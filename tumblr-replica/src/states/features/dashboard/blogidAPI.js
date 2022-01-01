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
      if (response.data.meta.status === '200') {
        return response.data;
      }
      return [];
    }
    try {
      const response = await Axios({
        method: 'GET',
        url: `${apiR}/blog/info/${blogUsername.slice(1)}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.data.meta.status === '200') {
        return response.data;
      }
      return [];
    } catch {
      return [];
    }
  },
);
export default GetBlogId;
