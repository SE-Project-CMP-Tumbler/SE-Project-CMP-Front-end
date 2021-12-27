import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardApi from '../../../apis/dashboardApi';

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

const blockBlog = createAsyncThunk('Notes/blockBlog', async (blogID) => {
  const response = await dashboardApi.post('block', { blog_id: blogID });
  return response.data;
});

const deletePost = createAsyncThunk('Notes/deletePost', async (postID) => {
  const response = await dashboardApi.delete(`post/3/${postID}`);
  return response.data;
});

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
    [deletePost.pending]: () => {},
    [deletePost.fulfilled]: () => {},
    [deletePost.rejected]: () => {},
  },
});
export {
  addReply,
  deleteReply,
  blockBlog,
  deletePost,
};
export default Notes.reducer;
