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
        const response = await Axios({
          method: 'POST',
          url: `${apiR}/upload_photo`,
          headers: {
            Authorization: AuthStr,
            'Content-Type': 'multipart/form-data',
          },
          data: img,
        });
        return response.data;
      } catch {
        return [];
      }
    }
    return [];
  },
);

export default uploadImage;
