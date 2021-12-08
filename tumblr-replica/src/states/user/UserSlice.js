/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const MOCK = 0;
const REAL = 1;
const SERVICETYPE = MOCK; // Change this to change the source
const api = 'http://localhost:8000';
const headers = {
  Accept: 'application/json',
};

// In the real API, it will be /login instead
const logInPOST = async (query) => fetch(`${api}/login`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(query),
}).then((res) => {
  console.log(res.status);
  console.log(res.statusText);
  console.log(res.json());
  return res;
});

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
      age: 0,
      primaryBlogAvatar: '',
    },
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
    * This function sends an API request (to actual API or to JSON server) to log the User In.
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    */
    logIn: (state) => {
      // let data = new Response();
      if (SERVICETYPE === MOCK) {
        /* data = */logInPOST({
          email: state.user.email,
          password: state.user.password,
        });
      } else if (SERVICETYPE === REAL) {
        //
      }
      console.log('Received Data!!');
      // console.log(data);
      // state.user.id = data.id;
      state.user.loggedin = true;
      // store the user in localStorage
      localStorage.setItem('user', JSON.stringify(state.user));
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
  },
});

export const {
  initialCheck, setEmail, setPassword, setBlogName, setAge, logIn, logOut, signUp,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
