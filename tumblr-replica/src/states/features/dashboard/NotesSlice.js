import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardApi from '../../../apis/dashboardApi';

const fetchNotes = createAsyncThunk(
  'Notes/fetchNotes',
  async (postID) => {
    const response = await dashboardApi.get(`post_notes/${postID}`);
    console.log(response);
    return response;
  },
);

const addReply = createAsyncThunk(
  'Notes/addReply',
  async ({ postID, replyText }) => {
    const response = await dashboardApi.post('reply', { reply_text: replyText, post_id: postID });
    return response.data;
  },
);

const deleteReply = createAsyncThunk(
  'Notes/addReply',
  async (replyID) => {
    const response = await dashboardApi.delete(`reply${replyID}`);
    return response.data;
  },
);

const addLike = createAsyncThunk(
  'Notes/addLike',
  async (postID) => {
    const response = await dashboardApi.post('like', { post_id: postID });
    return response.data;
  },
);

const unLike = createAsyncThunk(
  'Notes/unLike',
  async (postID) => {
    const response = await dashboardApi.delete(`like/${postID}`);
    return response.data;
  },
);

const blockBlog = createAsyncThunk(
  'Notes/blockBlog',
  async (blogID) => {
    const response = await dashboardApi.post('block', { blog_id: blogID });
    return response.data;
  },
);

const deletePost = createAsyncThunk(
  'Notes/deletePost',
  async (postID) => {
    const response = await dashboardApi.delete(`post/3/${postID}`);
    return response.data;
  },
);

const Notes = createSlice({
  name: 'Notes',
  initialState: {
    replies: [],
    likes: [],
    reblogs: [],
  },
  reducers: {
  },
  extraReducers: {
    [fetchNotes.pending]: () => {
    },
    [fetchNotes.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload.status === 200) {
        const s = state;
        s.replies = payload.data.note.replies;
        s.likes = payload.data.note.likes;
        s.reblogs = payload.data.note.reblogs;
      }
    },
    [fetchNotes.rejected]: () => {
    },
    [addReply.pending]: () => {
    },
    [addReply.fulfilled]: () => {
    },
    [addReply.rejected]: () => {
    },
    [deleteReply.pending]: () => {
    },
    [deleteReply.fulfilled]: () => {
    },
    [deleteReply.rejected]: () => {
    },
    [addLike.pending]: () => {
    },
    [addLike.fulfilled]: () => {
    },
    [addLike.rejected]: () => {
    },
    [unLike.pending]: () => {
    },
    [unLike.fulfilled]: () => {
    },
    [unLike.rejected]: () => {
    },
    [blockBlog.pending]: () => {
    },
    [blockBlog.fulfilled]: () => {
    },
    [blockBlog.rejected]: () => {
    },
    [deletePost.pending]: () => {
    },
    [deletePost.fulfilled]: () => {
    },
    [deletePost.rejected]: () => {
    },
  },
});
const getNotes = (state) => {
  console.log(state.Notes);
  return { likes: state.Notes.likes, replies: state.Notes.replies, reblogs: state.Notes.reblogs };
};
export {
  fetchNotes, getNotes, addReply, deleteReply, addLike, unLike, blockBlog, deletePost,
};
export default Notes.reducer;
