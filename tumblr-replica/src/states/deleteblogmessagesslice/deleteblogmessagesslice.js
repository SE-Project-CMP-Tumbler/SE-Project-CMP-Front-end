import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiR } from '../../apis/globalAxpi';

const DeleteBlogMsgAsynch = createAsyncThunk(
  'delete/blog_messages',
  async (BlogId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.delete('messages/' + BlogId, { headers: { Authorization: AuthStr, Accept: 'application/json', 'Content-Type': 'application/json' } });
    return response.data;
  },
);

const initialState = {
  deleteblogmsg: { meta: { status: '000', msg: 'Loading' } },
};

const deleteBlogMessagesSlice = createSlice({
  name: 'deleteblogmsg',
  initialState,
  reducers: {},
  extraReducers: {
    [DeleteBlogMsgAsynch.pending]: () => { },
    [DeleteBlogMsgAsynch.fulfilled]: (state, { payload }) => ({ ...state, deleteblogmsg: payload }),
    [DeleteBlogMsgAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getdeleteBlogMessages = (state) => state.deleteblogmsg.deleteblogmsg;
const deleteBlogMessagesReducer = deleteBlogMessagesSlice.reducer;
export {
  getdeleteBlogMessages,
  DeleteBlogMsgAsynch,
};
export default deleteBlogMessagesReducer;
