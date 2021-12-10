import { createSlice } from '@reduxjs/toolkit';

export const PostNotes = createSlice({
  name: 'PostNotes',
  initialState: {
    replies: [],
    likes: [],
    reblogs: [],
  },
  reducers: {
    SetNotes: (state, action) => {
      const s = state;
      s.replies = action.payload.replies;
      s.reblogs = action.payload.reblogs;
      s.likes = action.payload.likes;
      console.log(s.likes, s.reblogs, s.replies);
    },
  },
});

export const { SetNotes } = PostNotes.actions;
export default PostNotes.reducer;
