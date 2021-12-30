import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const AskAsynch = createAsyncThunk(
  'ask_blog/:blog_id',
  async (dispatch, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    try {
      const response = await axios({
        method: 'POST',
        url: `https://api.dev.tumbler.social/api/ask/${dispatch.blogid}`,
        headers: {
          Authorization: AuthStr,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          question_body: dispatch.str,
          question_flag: dispatch.unknown,
        },
      });
      return response.data;
    } catch (err) {
      throw Error(err);
    }
  },
);

const initialState = {
  ask: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const AskSlice = createSlice({
  name: 'ask',
  initialState,
  reducers: {},
  extraReducers: {
    [AskAsynch.pending]: () => { },
    [AskAsynch.fulfilled]: (state, { payload }) => ({ ...state, ask: payload }),
    [AskAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getAsk = (state) => state.ask.ask;
const AskReducer = AskSlice.reducer;
export {
  getAsk,
  AskAsynch,
};
export default AskReducer;
