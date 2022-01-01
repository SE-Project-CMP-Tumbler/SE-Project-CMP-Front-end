import { createSlice } from '@reduxjs/toolkit';

const CreatePostState = createSlice({
  name: 'CreatePostState',
  initialState: {
    opend: false,
    postBody: '',
    edit: 0,
    postID: 0,
    postType: 'general',
  },
  reducers: {
    setOpened: (state, action) => {
      const s = state;
      s.opend = action.payload.opend;
      if (s.opend) {
        s.postBody = action.payload.postBody;
        s.edit = action.payload.edit;
        s.postID = action.payload.postID;
        s.postType = action.payload.postType;
      } else {
        s.postBody = '';
        s.edit = 0;
        s.postID = 0;
        s.postType = 'general';
      }
    },
  },
});
export const {
  setOpened,
} = CreatePostState.actions;
export default CreatePostState.reducer;
