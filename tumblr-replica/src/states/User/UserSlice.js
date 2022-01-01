/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAPI';

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

export const checkCredentialsThunk = createAsyncThunk(
  'checkRegisterCredentials',
  async (query) => fetch(`${api}/check_register_credentials`, {
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

export const checkCredentialsThunkR = createAsyncThunk(
  'checkRegisterCredentialsR',
  async (query) => fetch(`${apiR}/check_register_credentials`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json()),
);

export const logInWithGoogleThunk = createAsyncThunk(
  'login_with_google',
  async (query) => fetch(`${api}/login_with_google`, {
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

export const logInWithGoogleThunkR = createAsyncThunk(
  'login_with_googleR',
  async (query) => fetch(`${apiR}/login_with_google`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json()),
);

export const registerWithGoogleThunk = createAsyncThunk(
  'register_with_google',
  async (query) => fetch(`${api}/register_with_google`, {
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

export const registerWithGoogleThunkR = createAsyncThunk(
  'register_with_googleR',
  async (query) => fetch(`${apiR}/register_with_google`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json()),
);

export const logOutThunk = createAsyncThunk(
  'logOut',
  async (query) => fetch(`${api}/logout`, {
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

export const logOutThunkR = createAsyncThunk(
  'logOutR',
  async (query) => fetch(`${apiR}/logout`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query}`,
    },
  }).then((res) => res.json()),
);

export const verifyEmailThunk = createAsyncThunk(
  'verifyEmail',
  async (query) => fetch(`${api}/email/verify/${query.id}/${query.hash}`, {
    method: 'GET',
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

export const verifyEmailThunkR = createAsyncThunk(
  'verifyEmailR',
  async (query) => fetch(`${apiR}/email/verify/${query.id}/${query.hash}`, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()),
);

export const resendVerificationThunk = createAsyncThunk(
  'resendVerification',
  async (query) => fetch(`${api}/email/resend_verification`, {
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

export const resendVerificationThunkR = createAsyncThunk(
  'resendVerificationR',
  async (query) => fetch(`${apiR}/email/resend_verification`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query}`,
    },
  }).then((res) => res.json()),
);

export const forgotPasswordThunk = createAsyncThunk(
  'forgot_password',
  async (query) => fetch(`${api}/forgot_password`, {
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

export const forgotPasswordThunkR = createAsyncThunk(
  'forgot_passwordR',
  async (query) => fetch(`${apiR}/forgot_password`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json()),
);

export const getResetPasswordEmailThunk = createAsyncThunk(
  'getresetpasswordemail',
  async (query) => fetch(`${api}/reset_password/${query.id}/${query.token}`, {
    method: 'GET',
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

export const getResetPasswordEmailThunkR = createAsyncThunk(
  'getresetpasswordemailR',
  async (query) => fetch(`${apiR}/reset_password/${query.id}/${query.token}`, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()),
);

export const resetPasswordThunk = createAsyncThunk(
  'resetpassword',
  async (query) => fetch(`${api}/reset_password`, {
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

export const resetPasswordThunkR = createAsyncThunk(
  'resetpasswordR',
  async (query) => fetch(`${apiR}/reset_password`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  }).then((res) => res.json()),
);

export const changePasswordThunk = createAsyncThunk(
  'changePassword',
  async (query) => fetch(`${api}/change_password`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query.accessToken}`,
    },
    body: JSON.stringify(query.body),
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

export const changePasswordThunkR = createAsyncThunk(
  'changePasswordR',
  async (query) => fetch(`${apiR}/change_password`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query.accessToken}`,
    },
    body: JSON.stringify(query.body),
  }).then((res) => res.json()),
);

export const changeEmailThunk = createAsyncThunk(
  'changeEmail',
  async (query) => fetch(`${api}/change_email`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query.accessToken}`,
    },
    body: JSON.stringify(query.body),
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

export const changeEmailThunkR = createAsyncThunk(
  'changeEmailR',
  async (query) => fetch(`${apiR}/change_email`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query.accessToken}`,
    },
    body: JSON.stringify(query.body),
  }).then((res) => res.json()),
);

export const deleteAccountThunk = createAsyncThunk(
  'deleteAccount',
  async (query) => fetch(`${api}/delete_user`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query.accessToken}`,
    },
    body: JSON.stringify(query.body),
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

export const deleteAccountThunkR = createAsyncThunk(
  'deleteAccountR',
  async (query) => fetch(`${apiR}/delete_user`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${query.accessToken}`,
    },
    body: JSON.stringify(query.body),
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
      age: '',
      primaryBlogAvatar: '',
      primaryBlogId: '',
      googleAccessToken: '',
      verified: false, // TO DO:Add it to all API calls and responses & Also, recieve it from login.
    },
    status: null,
    statusMessage: '',
    googleAccessed: null,
    regStep: 1,
    showReVerify: true,
    resetEmailReceived: false,
    emailChanged: false,
    passwordChanged: false,
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
      window.location.replace('/');
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
    * This function sets the step of the Registeration of the new User
    * 1 --> takes the email, password & the BlogName of the user
    * 2 --> takes the age of the User
    * @method
    * @param {object} state The object that stores step of the registeration
    * @param {object} action The object containing the number of the new step (set it to 1 or 2)
    */
    setRegStep: (state, action) => {
      state.regStep = action.payload;
    },
    /**
    * This function sets Google Access Token
    * @method
    * @param {object} state The object that stores Google Access Token
    * @param {object} action The object containing the Google Access Token
    */
    setGoogleAccessToken: (state, action) => {
      state.googleAccessToken = action.payload;
    },
    /**
    * This function sets showReVerify with false
    * @method
    * @param {object} state The object that stores the value of showReVerify
    * used in showing the reVerify prompt
    */
    hideReVerify: (state) => {
      state.showReVerify = false;
    },
    /**
    * This function sets resetEmailReceived with true
    * @method
    * @param {object} state The object that stores the value of resetEmailReceived
    * used in executing the Reset Password Page
    */
    setResetEmailReceived: (state) => {
      state.resetEmailReceived = true;
    },
    /**
    * This function sends an API request (to actual API or to JSON server) to login with Google.
    * @method
    * @param {object} state The object that stores the User's email, password, age and other info
    */
    continueWithGoogle: (state, action) => {
      switch (action?.payload.type) {
        case 'AUTH':
          state.user.googleAccessToken = action?.payload.data.accessToken;
          break;
        default:
          break;
      }
    },
    /**
    * This function sets the verifed state of the User
    * @method
    * @param {object} state The object that stores the current verification state of the User
    * @param {object} action The object containing whether the user is verified or not
    */
    setVerified: (state, action) => {
      state.user.verified = action.payload;
    },
    /**
    * This function resets the status message state
    * @method
    * @param {object} state The object that stores the current Status Message
    */
    setStatusMessage: (state) => {
      state.statusMessage = '';
    },
    /**
    * This function resets the status state
    * @method
    * @param {object} state The object that stores the current Status number
    */
    setStatus: (state) => {
      state.status = null;
    },
    /**
    * This function sets whether the email change request was executed correctly or not
    * @method
    * @param {object} state The object that stores the current state of the email change.
    * @param {object} action The object containing whether the email was changed or not.
    */
    setEmailChanged: (state, action) => {
      state.user.emailChanged = action.payload;
    },
    /**
    * This function sets whether the password change request was executed correctly or not
    * @method
    * @param {object} state The object that stores the current state of the email password.
    * @param {object} action The object containing whether the password was changed or not.
    */
    setPasswordChanged: (state, action) => {
      state.user.passwordChanged = action.payload;
    },
  },
  extraReducers: {
    [logInThunk.pending]: () => {
    },
    [logInThunk.fulfilled]: (state, { payload }) => {
      if (payload.id === '') { // CASE 404
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.user.id = payload.id;
        state.user.blogName = payload.blog_username;
        state.user.email = payload.email;
        state.user.primaryBlogAvatar = payload.blog_avatar;
        state.user.accessToken = payload.access_token;
        state.user.loggedin = true;
        state.user.verified = payload.verified;
        state.user.primaryBlogId = payload.response.blog_id;
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
      if (payload.meta.status === '200') {
        state.status = payload.meta.status;
        state.statusMessage = '';
        state.user.id = payload.response.id;
        state.user.primaryBlogId = payload.response.blog_id;
        state.user.blogName = payload.response.blog_username;
        state.user.email = payload.response.email;
        state.user.verified = payload.response.is_verified;
        state.user.primaryBlogAvatar = payload.response.blog_avatar;
        state.user.accessToken = payload.response.access_token;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = 'Error! Please Try Again Later';
      } else if (payload.meta.status === '422') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = payload.meta.msg;
      }
    },
    [logInThunkR.rejected]: () => {
    },
    [signUpThunk.pending]: () => {
    },
    [signUpThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.user.id = payload.id;
        state.user.blogName = payload.blog_username;
        state.user.email = payload.email;
        state.user.primaryBlogAvatar = payload.blog_avatar;
        state.user.accessToken = payload.access_token;
        state.user.primaryBlogId = payload.response.blog_id;
        state.user.loggedin = true;
        // Of course, the user can't be verified. He just registered.
        state.user.verified = payload.response.is_verified;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
        state.regStep = 1;
      }
    },
    [signUpThunk.rejected]: () => {
    },
    [signUpThunkR.pending]: () => {
    },
    [signUpThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.status = payload.meta.status;
        state.statusMessage = '';
        state.user.id = payload.response.id;
        state.user.blogName = payload.response.blog_username;
        state.user.email = payload.response.email;
        state.user.primaryBlogAvatar = payload.response.blog_avatar;
        state.user.accessToken = payload.response.access_token;
        state.user.primaryBlogId = payload.response.blog_id;
        state.user.loggedin = true;
        // False: Of course, the user can't be verified. He just registered.
        state.user.verified = payload.response.is_verified;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
        state.regStep = 1;
      } else if (payload.meta.status === '422') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = payload.meta.msg;
      } else if (payload.meta.status === '500') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = 'Error! Please Try Again Later';
      }
    },
    [signUpThunkR.rejected]: () => {
    },
    [checkCredentialsThunk.pending]: () => {
    },
    [checkCredentialsThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.regStep = 2;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      }
    },
    [checkCredentialsThunk.rejected]: () => {
    },
    [checkCredentialsThunkR.pending]: () => {
    },
    [checkCredentialsThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.regStep = 2;
        state.status = payload.meta.status;
        state.statusMessage = '';
      } else if (payload.meta.status === '422') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = payload.meta.msg;
      } else if (payload.meta.status === '500') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = 'Error! Please Try Again Later';
      }
    },
    [checkCredentialsThunkR.rejected]: () => {
    },
    [logInWithGoogleThunk.pending]: () => {
    },
    [logInWithGoogleThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.regStep = 2;
        state.user.verified = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      }
    },
    [logInWithGoogleThunk.rejected]: () => {
    },
    [logInWithGoogleThunkR.pending]: () => {
    },
    [logInWithGoogleThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.status = payload.meta.status;
        state.statusMessage = '';
        state.user.id = payload.response.id;
        state.user.blogName = payload.response.blog_username;
        state.user.email = payload.response.email;
        state.user.primaryBlogAvatar = payload.response.blog_avatar;
        state.user.accessToken = payload.response.access_token;
        state.user.primaryBlogId = payload.response.blog_id;
        state.user.verified = payload.response.is_verified;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
        state.googleAccessed = '';
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.googleAccessed = '404';
      } else if (payload.meta.status === '422') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = payload.meta.msg;
        state.googleAccessed = '424';
      }
    },
    [logInWithGoogleThunkR.rejected]: () => {
    },
    [registerWithGoogleThunk.pending]: () => {
    },
    [registerWithGoogleThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.regStep = 2;
        state.user.verified = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      }
    },
    [registerWithGoogleThunk.rejected]: () => {
    },
    [registerWithGoogleThunkR.pending]: () => {
    },
    [registerWithGoogleThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.status = payload.meta.status;
        state.statusMessage = '';
        state.user.id = payload.response.id;
        state.user.blogName = payload.response.blog_username;
        state.user.email = payload.response.email;
        state.user.primaryBlogAvatar = payload.response.blog_avatar;
        state.user.accessToken = payload.response.access_token;
        state.user.primaryBlogId = payload.response.blog_id;
        state.user.verified = payload.response.is_verified;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
        state.googleAccessed = '';
      } else if (payload.meta.status === '422') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = payload.meta.msg;
      } else if (payload.meta.status === '500') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      }
    },
    [registerWithGoogleThunkR.rejected]: () => {
    },
    [logOutThunk.pending]: () => {
    },
    [logOutThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        // store the user in localStorage
        localStorage.clear();
        state.user = {
          loggedin: false,
          id: '',
          accessToken: '',
          email: '',
          password: '',
          blogName: '',
          age: '',
          primaryBlogAvatar: '',
          primaryBlogId: '',
          googleAccessToken: '',
          verified: false,
        };
        window.location.replace('/');
      }
    },
    [logOutThunk.rejected]: () => {
    },
    [logOutThunkR.pending]: () => {
    },
    [logOutThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        localStorage.clear();
        state.user = {
          loggedin: false,
          id: '',
          accessToken: '',
          email: '',
          password: '',
          blogName: '',
          age: '',
          primaryBlogId: '',
          primaryBlogAvatar: '',
          googleAccessToken: '',
          verified: false,
        };
        window.location.replace('/');
      } else if (payload.meta.status === '401') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        window.location.replace('/dashboard');
      } else if (payload.meta.status === '404') {
        localStorage.clear();
        state.user = {
          loggedin: false,
          id: '',
          accessToken: '',
          email: '',
          password: '',
          blogName: '',
          age: '',
          primaryBlogId: '',
          primaryBlogAvatar: '',
          googleAccessToken: '',
          verified: false,
        };
        window.location.replace('/');
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      }
    },
    [logOutThunkR.rejected]: () => {
    },
    [verifyEmailThunk.pending]: () => {
    },
    [verifyEmailThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
        // eslint-disable-next-line no-console
        console.log('Entered Error!');
      } else { // CASE 200
        state.user.verified = true;
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          state.user = foundUser;
          localStorage.clear();
          localStorage.setItem('user', JSON.stringify(state.user));
        }
        // eslint-disable-next-line no-console
        console.log('Entered Here!!!');
      }
    },
    [verifyEmailThunk.rejected]: () => {
    },
    [verifyEmailThunkR.pending]: () => {
    },
    [verifyEmailThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          state.user = foundUser;
          state.user.verified = true;
          localStorage.clear();
          localStorage.setItem('user', JSON.stringify(state.user));
        } else { state.user.verified = true; }
      } else if (payload.meta.status === '500') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        // window.location.replace('/dashboard');
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        localStorage.clear();
        state.user = {
          loggedin: false,
          id: '',
          accessToken: '',
          email: '',
          password: '',
          blogName: '',
          age: '',
          primaryBlogId: '',
          primaryBlogAvatar: '',
          googleAccessToken: '',
          verified: false,
        };
        // window.location.replace('/');
      }
    },
    [verifyEmailThunkR.rejected]: () => {
    },
    [resendVerificationThunk.pending]: () => {
    },
    [resendVerificationThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.showReVerify = false;
      }
    },
    [resendVerificationThunk.rejected]: () => {
    },
    [resendVerificationThunkR.pending]: () => {
    },
    [resendVerificationThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.showReVerify = false;
      } else if (payload.meta.status === '401') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      } else if (payload.meta.status === '500') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      }
    },
    [resendVerificationThunkR.rejected]: () => {
    },
    [forgotPasswordThunk.pending]: () => {
    },
    [forgotPasswordThunk.fulfilled]: (state, { payload }) => {
      if (payload.id === '') { // CASE 404
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.user.id = payload.id;
        state.user.blogName = payload.blog_username;
        state.user.email = payload.email;
        state.user.primaryBlogAvatar = payload.blog_avatar;
        state.user.accessToken = payload.access_token;
        state.user.loggedin = true;
        state.user.verified = payload.verified;
        state.user.primaryBlogId = payload.response.blog_id;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      }
    },
    [forgotPasswordThunk.rejected]: () => {
    },
    [forgotPasswordThunkR.pending]: () => {
    },
    [forgotPasswordThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.status = payload.meta.status;
        state.statusMessage = '';
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = 'Sorry, that email address is not registered with us.';
      } else if (payload.meta.status === '400') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = payload.meta.msg;
      }
    },
    [forgotPasswordThunkR.rejected]: () => {
    },
    [getResetPasswordEmailThunk.pending]: () => {
    },
    [getResetPasswordEmailThunk.fulfilled]: (state, { payload }) => {
      if (payload.id === '') { // CASE 404
        // state.status = 'NOT FOUND';
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      } else { // CASE 200
        state.user.email = payload.email;
      }
    },
    [getResetPasswordEmailThunk.rejected]: () => {
    },
    [getResetPasswordEmailThunkR.pending]: () => {
    },
    [getResetPasswordEmailThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.user.email = payload.response.email;
        // eslint-disable-next-line no-console
        console.log('Email = ', payload.response.email);
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      } else if (payload.meta.status === '500') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      }
    },
    [getResetPasswordEmailThunkR.rejected]: () => {
    },
    [resetPasswordThunk.pending]: () => {
    },
    [resetPasswordThunk.fulfilled]: (state, { payload }) => {
      if (payload.id === '') { // CASE 404
        state.status = 'NOT FOUND';
      } else { // CASE 200
        state.user.id = payload.id;
        state.user.blogName = payload.blog_username;
        state.user.email = payload.email;
        state.user.primaryBlogAvatar = payload.blog_avatar;
        state.user.accessToken = payload.access_token;
        state.user.loggedin = true;
        state.user.verified = payload.verified;
        state.user.primaryBlogId = payload.response.blog_id;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      }
    },
    [resetPasswordThunk.rejected]: () => {
    },
    [resetPasswordThunkR.pending]: () => {
    },
    [resetPasswordThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        state.status = payload.meta.status;
        state.statusMessage = '';
        state.user.id = payload.response.id;
        state.user.primaryBlogId = payload.response.blog_id;
        state.user.blogName = payload.response.blog_username;
        state.user.email = payload.response.email;
        state.user.verified = payload.response.is_verified;
        state.user.primaryBlogAvatar = payload.response.blog_avatar;
        state.user.accessToken = payload.response.access_token;
        state.user.loggedin = true;
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.replace('/dashboard');
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = 'Error! Please Try Again Later';
      } else if (payload.meta.status === '422') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        state.status = payload.meta.status;
        state.statusMessage = 'The two passwords don\'t match';
      }
    },
    [resetPasswordThunkR.rejected]: () => {
    },
    [changePasswordThunk.pending]: () => {
    },
    [changePasswordThunk.fulfilled]: (state, { payload }) => {
      state.passwordChanged = false;
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
        window.location.replace('/');
      } else { // CASE 200
        state.status = payload.meta.status;
      }
    },
    [changePasswordThunk.rejected]: () => {
    },
    [changePasswordThunkR.pending]: () => {
    },
    [changePasswordThunkR.fulfilled]: (state, { payload }) => {
      state.passwordChanged = false;
      if (payload.meta.status === '200') {
        state.status = payload.meta.status;
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          state.user = foundUser;
          localStorage.clear();
          // store the user in localStorage
          localStorage.setItem('user', JSON.stringify(state.user));
        }
      } else if (payload.meta.status === '403' || payload.meta.status === '422') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          state.user = foundUser;
        } else {
          localStorage.clear();
          state.user = {
            loggedin: false,
            id: '',
            accessToken: '',
            email: '',
            password: '',
            blogName: '',
            age: '',
            primaryBlogId: '',
            primaryBlogAvatar: '',
            googleAccessToken: '',
            verified: false,
          };
          window.location.replace('/');
        }
      } else { // Case 500
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      }
    },
    [changePasswordThunkR.rejected]: () => {
    },
    [changeEmailThunk.pending]: () => {
    },
    [changeEmailThunk.fulfilled]: (state, { payload }) => {
      state.emailChanged = false;
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
        window.location.replace('/');
      } else { // CASE 200
        state.status = payload.meta.status;
      }
    },
    [changeEmailThunk.rejected]: () => {
    },
    [changeEmailThunkR.pending]: () => {
    },
    [changeEmailThunkR.fulfilled]: (state, { payload }) => {
      state.emailChanged = false;
      if (payload.meta.status === '200') {
        console.log('Change Email Successful!');
        console.log(payload);
        const newEmail = state.user.email;
        state.status = payload.meta.status;
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          state.user = foundUser;
          state.user.email = newEmail;
        }
        // state.user.email = payload.response.email;
        localStorage.clear();
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
      } else if (payload.meta.status === '403' || payload.meta.status === '42') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          state.user = foundUser;
        } else {
          localStorage.clear();
          state.user = {
            loggedin: false,
            id: '',
            accessToken: '',
            email: '',
            password: '',
            blogName: '',
            age: '',
            primaryBlogId: '',
            primaryBlogAvatar: '',
            googleAccessToken: '',
            verified: false,
          };
          window.location.replace('/');
        }
      } else { // Case 500
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      }
    },
    [changeEmailThunkR.rejected]: () => {
    },
    [deleteAccountThunk.pending]: () => {
    },
    [deleteAccountThunk.fulfilled]: (state, { payload }) => {
      if (payload?.id === undefined) { // CASE 500 or 422 TO BE handled later
        state.status = 'NOT FOUND';
      } else { // CASE 200
        // store the user in localStorage
        localStorage.clear();
        state.user = {
          loggedin: false,
          id: '',
          accessToken: '',
          email: '',
          password: '',
          blogName: '',
          age: '',
          primaryBlogId: '',
          primaryBlogAvatar: '',
          googleAccessToken: '',
          verified: false,
        };
      }
    },
    [deleteAccountThunk.rejected]: () => {
    },
    [deleteAccountThunkR.pending]: () => {
    },
    [deleteAccountThunkR.fulfilled]: (state, { payload }) => {
      if (payload.meta.status === '200') {
        localStorage.clear();
        state.user = {
          loggedin: false,
          id: '',
          accessToken: '',
          email: '',
          password: '',
          blogName: '',
          age: '',
          primaryBlogId: '',
          primaryBlogAvatar: '',
          googleAccessToken: '',
          verified: false,
        };
      } else if (payload.meta.status === '401' || payload.meta.status === '403') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        // window.location.replace('/dashboard');
      } else if (payload.meta.status === '404') {
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
        localStorage.clear();
        state.user = {
          loggedin: false,
          id: '',
          accessToken: '',
          email: '',
          password: '',
          blogName: '',
          age: '',
          primaryBlogId: '',
          primaryBlogAvatar: '',
          googleAccessToken: '',
          verified: false,
        };
        // window.location.replace('/');
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      } else { // Case 500
        // eslint-disable-next-line no-console
        console.log(payload.meta.msg);
      }
    },
    [deleteAccountThunkR.rejected]: () => {
    },
  },
});

export const {
  initialCheck, setEmail, setPassword, setBlogName, setAge, logOut, signUp, continueWithGoogle,
  setRegStep, setGoogleAccessToken, setVerified, setStatusMessage, hideReVerify,
  setResetEmailReceived, setEmailChanged, setPasswordChanged, setStatus,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectStep = (state) => state.user.regStep;

export const selectGoogle = (state) => state.user.googleAccessed;

export const selectShowReVerify = (state) => state.user.showReVerify;

export const selectResetEmailReceived = (state) => state.user.resetEmailReceived;

export const selectEmailChanged = (state) => state.user.emailChanged;

export const selectPasswordChanged = (state) => state.user.passwordChanged;

export const selectStatus = (state) => state.user.status;

export const selectStatusMessage = (state) => state.user.statusMessage;

export default userSlice.reducer;
