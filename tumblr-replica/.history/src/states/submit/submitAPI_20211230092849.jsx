import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const SubmitAsynch = createAsyncThunk(
  'submit/:blog_id',
  async (dispatch, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.dev.tumbler.social/api/post/submission/' + dispatch.blogId,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          post_status: dispatch.statue,
          post_type: dispatch.type,
          post_time: dispatch.date,
          post_body: dispatch.body,
        },
      });
      return response.data;
    } catch (err) {
      throw Error(err);
    }
  },
);

const initialState = {
  postsubmit: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const postAnswerSlice = createSlice({
  name: 'postsubmit',
  initialState,
  reducers: {},
  extraReducers: {
    [SubmitAsynch.pending]: () => { },
    [SubmitAsynch.fulfilled]: (state, { payload }) => ({ ...state, postsubmit:: payload }),
    [SubmitAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getAnswer = (state) => state.postanswer.postanswer;
const AnswerReducer = postAnswerSlice.reducer;
export {
  getAnswer,
  SubmitAsynch,
};
export default AnswerReducer;