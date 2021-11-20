/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      loggedin: true, // false
      email: '',
      password: '',
      blogName: '',
      // age: null,
    },
  },
  reducers: {
    setEmail: (state, action) => {
      state.user.email = action.payload;
      // console.log('Inside the setEmail reducer!');
      // console.log(state.user.email);
    },
    setPassword: (state, action) => {
      state.user.password = action.payload;
    },
    setBlogName: (state, action) => {
      state.user.blogName = action.payload;
    },
    logIn: (state) => {
      state.user.loggedin = true;
    },
    logOut: (state) => {
      state.user = null;
      state.user.loggedin = false;
    },
  },
});

export const {
  setEmail, setPassword, setBlogName, logIn, logOut,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
