import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { apiR, SERVICETYPE } from '../../../apis/globalAPI';

const uploadVideo = createAsyncThunk(
  'CreatePost/uploadvideo',
  async ({ img, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 1) {
      try {
        const response = await Axios({
          method: 'POST',
          url: `${apiR}/upload_video`,
          headers: {
            Authorization: AuthStr,
            'Content-Type': 'multipart/form-data',
          },
          data: img,
        });
        console.log('bla');
        console.log(response.data);
        return response.data;
      } catch (err) {
        console.log(err);
        return [];
      }
    }
    return [];
  },
);

export default uploadVideo;
