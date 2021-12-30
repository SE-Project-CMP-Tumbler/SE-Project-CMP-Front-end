import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import dashboardApi from '../../../apis/dashboardApi';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const addReply = createAsyncThunk(
  'Notes/addReply',
  async ({ postID, replyText }) => {
    const response = await dashboardApi.post('reply', {
      reply_text: replyText,
      post_id: postID,
    });
    return response.data;
  },
);

const deleteReply = createAsyncThunk('Notes/addReply', async (replyID) => {
  const response = await dashboardApi.delete(`reply${replyID}`);
  return response.data;
});

const blockBlog = createAsyncThunk(
  'DashPosts/CreatePost',
  async ({ blocked, User }) => {
    const USER_TOKEN = User.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    if (SERVICETYPE === 0) {
      const response = await Axios({
        method: 'POST',
        url: `${api}/block`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    }
    try {
      const response = await Axios({
        method: 'POST',
        url: `${apiR}/block/${User.primaryBlogId}/${blocked}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch {
      return [];
    }
  },
);

const Notes = createSlice({
  name: 'Notes',
  initialState: {
    replies: [],
    likes: [],
    reblogs: [],
  },
  reducers: {},
  extraReducers: {
    [addReply.pending]: () => {},
    [addReply.fulfilled]: () => {},
    [addReply.rejected]: () => {},
    [deleteReply.pending]: () => {},
    [deleteReply.fulfilled]: () => {},
    [deleteReply.rejected]: () => {},
    [blockBlog.pending]: () => {},
    [blockBlog.fulfilled]: () => {},
    [blockBlog.rejected]: () => {},
  },
});
export {
  addReply,
  deleteReply,
  blockBlog,
};
export default Notes.reducer;
