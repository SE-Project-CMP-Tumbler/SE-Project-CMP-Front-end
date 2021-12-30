import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const AnswerAsynch = createAsyncThunk(
  'answer/:question_id',
  async (dispatch, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.dev.tumbler.social/api/answer/' + dispatch.postId,
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
  postanswer: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const postAnswerSlice = createSlice({
  name: 'postanswer',
  initialState,
  reducers: {},
  extraReducers: {
    [AnswerAsynch.pending]: () => { },
    [AnswerAsynch.fulfilled]: (state, { payload }) => ({ ...state, postanswer: payload }),
    [AnswerAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getAnswer = (state) => state.postanswer.postanswer;
const AnswerReducer = postAnswerSlice.reducer;
export {
  getAnswer,
  AnswerAsynch,
};
export default AnswerReducer;
