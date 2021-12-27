import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const AddReply = createAsyncThunk(
  'DashPosts/AddReply',
  async ({ postID, reply, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'POST',
        url: `${api}/reply`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          reply_text: reply,
        },
      });
      console.log(response.data);
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'POST',
        url: `${apiR}/post/reply/${postID}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          reply_text: reply,
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

export default AddReply;
