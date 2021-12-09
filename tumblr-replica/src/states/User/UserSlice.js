/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  api, apiR, MOCK, REAL, SERVICETYPE,
} from '../../apis/globalAPI';

const headers = {
  Accept: 'application/json',
};

export const logInThunk = createAsyncThunk(
  'login',
  async (query) => fetch(`${api}/login`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => {
    if (res.status === 200) {
      return res.json().then((data) => data);
    }
    return {
      id: '',
      blog_username: '',
      email: '',
      blog_avatar: '',
      access_token: '',
    };
  }),
);

export const logInThunkR = createAsyncThunk(
  'loginR',
  async (query) => fetch(`${apiR}/login`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json()),
);

export const signUpThunk = createAsyncThunk(
  'register',
  async (query) => fetch(`${api}/register`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => {
    if (res.status === 200) {
      return res.json().then((data) => data);
    }
    return {
      id: '',
      blog_username: '',
      email: '',
      blog_avatar: '',
      access_token: '',
    };
  }),
);

export const signUpThunkR = createAsyncThunk(
  'registerR',
  async (query) => fetch(`${apiR}/register`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json()),
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      loggedin: false,
      id: '',
      accessToken: '',
      email: '',
      password: '',
      blogName: '',
      age: 25, // should be ''
      primaryBlogAvatar: '',
      googleAccessToken: '',
    },
    status: null,
    googleAccessed: null,
  },
  reducers: {
    /**
    * This function checks the existance of a User in the local storage and sets it if avaiable
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    */
    initialCheck: (state) => {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        state.user = foundUser;
      }
    },
    /**
    * This function sets the email of the User in the User State
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    * @param {object} action The object containing the User's email to be added to the state
    */
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    /**
    * This function sets the password of the User in the User State
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    * @param {object} action The object containing the User's password to be added to the state
    */
    setPassword: (state, action) => {
      state.user.password = action.payload;
    },
    /**
    * This function sets the Primary BlogName of the User in the User State
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    * @param {object} action The object containing the User's BlogName to be added to the state
    */
    setBlogName: (state, action) => {
      state.user.blogName = action.payload;
    },
    /**
    * This function sets the Age of the User in the User State
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    * @param {object} action The object containing the User's BlogName to be added to the state
    */
    setAge: (state, action) => {
      state.user.age = action.payload;
    },
    /**
    * This function sends an API request (to actual API or to JSON server) to log the User out.
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    */
    logOut: (state) => {
      if (SERVICETYPE === MOCK) {
        // logOutPOST();
      } else if (SERVICETYPE === REAL) {
        //
      }
      localStorage.clear();
      state.user = {
        loggedin: false,
        id: '',
        accessToken: '',
        email: '',
        password: '',
        blogName: '',
        age: 0,
        primaryBlogAvatar: '',
        googleAccessToken: '',
      };
      window.location.replace('/logout');
    },
    /**
    * This function sends an API request (to actual API or to JSON server) to register the new User.
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    */
    signUp: (state) => {
      state.user.loggedin = true;
    },
    /**
    * This function sends an API request (to actual API or to JSON server) to login with Google.
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    */
    continueWithGoogle: (state, action) => {
      // console.log('Entered ContinueWithGoogle!!');
      console.log(action?.payload);
      switch (action?.payload.type) {
        case 'AUTH':
          console.log('Entered AUTH!!');
          state.user.loggedin = true;
          state.user.googleAccessToken = action?.payload.data.accessToken;
          state.user.email = action?.payload.data.result.email;
          state.user.primaryBlogAvatar = action?.payload.data.result.imageUrl;
          state.user.blogName = action?.payload.data.result.name;
          // store the user in localStorage
          localStorage.setItem('user', JSON.stringify(state.user));
          // console.log(action?.payload.data);
          window.location.replace('/dashboard');
          break;
        default:
          break;
      }
    },
  },
  extraReducers: {
    [logInThunk.pending]: () => {
    },
    [logInThunk.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload.id === '') { // CASE 404
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.user.id = payload.id;
        state.user.blogName = payload.blog_username;
        state.user.email = payload.email;
        state.user.primaryBlogAvatar = payload.blog_avatar;
        state.user.accessToken = payload.access_token;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      }
    },
    [logInThunk.rejected]: () => {
    },
    [logInThunkR.pending]: () => {
    },
    [logInThunkR.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload.meta.status === '200') {
        state.user.id = payload.response.id;
        state.user.blogName = payload.response.blog_username;
        state.user.email = payload.response.email;
        state.user.primaryBlogAvatar = payload.response.blog_avatar;
        state.user.accessToken = payload.response.access_token;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      } else if (payload.meta.status === '404') {
        console.log(payload.meta.msg);
      }
    },
    [logInThunkR.rejected]: () => {
    },
    [signUpThunk.pending]: () => {
    },
    [signUpThunk.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.user.id = payload.id;
        state.user.blogName = payload.blog_username;
        state.user.email = payload.email;
        state.user.primaryBlogAvatar = payload.blog_avatar;
        state.user.accessToken = payload.access_token;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      }
    },
    [signUpThunk.rejected]: () => {
    },
    [signUpThunkR.pending]: () => {
    },
    [signUpThunkR.fulfilled]: (state, { payload }) => {
      console.log('Inside the Reducer!');
      console.log(payload);
      if (payload.meta.status === '200') {
        state.user.id = payload.response.id;
        state.user.blogName = payload.response.blog_username;
        state.user.email = payload.response.email;
        state.user.primaryBlogAvatar = payload.response.blog_avatar;
        state.user.accessToken = payload.response.access_token;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      } else if (payload.meta.status === '422') {
        console.log(payload.meta.msg);
      } else if (payload.meta.status === '500') {
        console.log(payload.meta.msg);
      }
    },
    [signUpThunkR.rejected]: () => {
    },
  },
});

export const {
  initialCheck, setEmail, setPassword, setBlogName, setAge, logOut, signUp, continueWithGoogle,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
