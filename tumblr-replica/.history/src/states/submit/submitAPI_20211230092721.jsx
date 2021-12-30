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
          
          post_status: dispatch.statue,
            "post_time": "2021-02-15",
            "post_type": "general",
            "post_body": "<div> <h1>What's Artificial intellegence? </h1> <img src='https://modo3.com/thumbs/fit630x300/84738/1453981470/%D8%A8%D8%AD%D8%AB_%D8%B9%D9%86_Google.jpg' alt=''> <p>It's the weapon that'd end the humanity!!</p> <video width='320' height='240' controls> <source src='movie.mp4' type='video/mp4'> <source src='movie.ogg' type='video/ogg'> Your browser does not support the video tag. </video> <p>#AI #humanity #freedom</p> </div>"
          
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
  SubmitAsynch,
};
export default AnswerReducer;