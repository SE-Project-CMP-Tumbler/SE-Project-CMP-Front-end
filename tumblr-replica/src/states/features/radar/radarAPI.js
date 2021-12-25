import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const fetchRadar = createAsyncThunk(
  'DashPosts/fetchRadar',
  async (User) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'GET',
        url: `${api}/posts/radar`,
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
      console.log('hi');
      const response = await Axios({
        method: 'GET',
        url: `${apiR}/posts/radar`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
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

export default fetchRadar;
