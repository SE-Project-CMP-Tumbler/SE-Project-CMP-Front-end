import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiBaseUrl = 'http://localhost:8000';
const initialState = {
  following: [],
  followingNum: '0',
  afterFollowMessage: '',
};

export const fetchFollowing = createAsyncThunk('Follow/fetchFollowing', async () => {
  try {
    console.log('helo fron async function');
    const response = await axios({
      method: 'GET',
      url: `${apiBaseUrl}/following`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res.data);
      return res.data;
    });
    console.log(response);
    return response;
  } catch (err) {
    throw Error(err);
  }
});

export const unfollow = createAsyncThunk('Follow/toggleFollowState', async (id) => {
  try {
    console.log('helo fron async function');
    await axios({
      method: 'DELETE',
      url: `${apiBaseUrl}/following/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
    });
  } catch (err) {
    throw Error(err);
  }
});

export const follow = createAsyncThunk('Follow/toggleFollowState', async (id) => {
  try {
    console.log('helo fron async function');
    await axios({
      method: 'POST',
      url: `${apiBaseUrl}/following`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: id,
    }).then(() => {
    });
  } catch (err) {
    throw Error(err);
  }
});

const followingReduser = createSlice({
  name: 'Follow',
  initialState,
  reducers: {
    getUsersAndFollow: async (state, action) => {
      const newstate = state;
      console.log(state.following);
      const response1 = await axios({
        method: 'GET',
        url: `${apiBaseUrl}/users`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.data);
        return res.data;
      });
      console.log(response1);
      let newData = [];
      if (action.payload.includes('.tumblr.com')) {
        // URL
        newData = response1.filter((elem) => elem.url === action.payload);
      } else if (action.payload.includes('@tumblr.com'))
      // eslint-disable-next-line brace-style
      { newData = response1.filter((elem) => elem.email === action.payload); } // User name
      else {
        console.log('helooooooooo');
        newData = response1.filter((elem) => elem.username === action.payload);
        console.log(newData);
      }
      if (newData !== []) {
        console.log('new data is not null');
        console.log(newstate);
        newstate.afterFollowMessage = `Great. Now you're following ${newData[0].username}`;
        const newFollowing = {
          img: newData[0].img,
          name: newData[0].username,
          lastupdate: newData[0].lastupdate,
        };
        await axios({
          method: 'POST',
          url: `${apiBaseUrl}/following`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: newFollowing,
        })
          .then(() => { console.log('post request is done'); });

        const response3 = await axios({
          method: 'GET',
          url: `${apiBaseUrl}/following`,
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res2) => res2.data);
        // eslint-disable-next-line no-param-reassign
        newstate.following = response3;
        console.log(newstate.following);
        // newstate.followingNum = response2.length;
      } else {
        newstate.afterFollowMessage = 'Maybe you spelled it wrong?';
      }
    },
  },
  extraReducers: {
    [fetchFollowing.pending]: () => {
      console.log('pending');
    },
    [fetchFollowing.fulfilled]: (state, action) => {
      console.log(state);
      const newstate = state;
      newstate.following = action.payload;
      console.log(action.payload);
      newstate.followingNum = action.payload.length;
    },
    [fetchFollowing.rejected]: () => {
      console.log('errorrrrrrrrrrrrr');
    },
    [unfollow.pending]: () => {
      console.log('pending');
    },
    [unfollow.fulfilled]: () => {
    },
    [unfollow.rejected]: () => {
      console.log('errorrrrrrrrrrrrr');
    },
    [follow.pending]: () => {
      console.log('pending');
    },
    [follow.fulfilled]: () => {
    },
    [follow.rejected]: () => {
      console.log('errorrrrrrrrrrrrr');
    },
  },
});
export default followingReduser.reducer;
export const {
  deleteFollowing, getUsersAndFollow,
} = followingReduser.actions;
