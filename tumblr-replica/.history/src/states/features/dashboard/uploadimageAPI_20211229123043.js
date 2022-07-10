import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { apiR, SERVICETYPE } from '../../../apis/globalAPI';

const uploadImage = createAsyncThunk(
  'CreatePost/uploadimage',
  async ({ img, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 1) {
      try {
        if (SERVICETYPE === 1) {
        const response = await Axios({
          method: 'POST',
          url: `${apiR}/upload_photo`,
          headers: {
            Authorization: AuthStr,
            'Content-Type': 'multipart/form-data',
          },
          data: img,
        });
        console.log('bla');
        console.log(response.data);
        return response.data;o
      }
      } catch (err) {
        console.log(err);
        return [];
      }
    return [];
  },
);

export default uploadImage;