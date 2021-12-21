import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000';
const initialState = {
  gifs: [],
  chatbox: [],
  chats: [],
  avatars: [],
  newmessage: false,
  Isloading: false,
  newmessagepress: false,
};

export const fetchChats = createAsyncThunk('Chat/fetchChats', async () => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await AxiosApi.get('/followed_by');
      return response?.data;
    }
    const response = await AxiosApi.get(`/followed_by/${blogID}`);
    return response?.data;
  } catch (err) {
    throw Error(err);
  }
});
const chatReducer = createSlice({
  name: 'Chat',
  initialState,
  reducers: {
    setFeedMessages: (state, action) => {
      const newstate = state;
      newstate.messages = action.payload.messages;
    },
    setGifs: (state, action) => {
      const newstate = state;
      newstate.gifs = action.payload.gifs;
    },
    setChatBoxesID: (state, action) => {
      if (state.chatbox.length) {
        console.log(state.chatbox.length);
        const newstate = state;
        newstate.avatars.push(state.chatbox[0]);
        newstate.chatbox = [];
      }
      state.chatbox.push(action.payload);
    },
    newMessagePress: (state) => {
      const newstate = state;
      newstate.newmessagepress = !state.newmessagepress;
    },
    removeChatBoxID: (state, action) => {
      const newstate = state;
      const newChatBoxes = state.chatbox.filter((elem) => elem.id !== action.payload.id);
      newstate.chatbox = newChatBoxes;
      newstate.avatars.push(action.payload);
    },
    removeChatBoxIDOnly: (state, action) => {
      const newstate = state;
      const newChatBoxes = state.chatbox.filter((elem) => elem.id !== action.payload);
      newstate.chatbox = newChatBoxes;
    },
    removeAvaterID: (state, action) => {
      const newstate = state;
      const newAvaters = state.avatars.filter((elem) => elem.id !== action.payload.id);
      newstate.avatars = newAvaters;
      if (state.chatbox.length) {
        console.log(state.chatbox.length);
        newstate.avatars.push(state.chatbox[0]);
        newstate.chatbox = [];
      }
      newstate.chatbox.push(action.payload);
    },
    toggleNewMessage: (state) => {
      const newstate = state;
      newstate.newmessage = !state.newmessage;
    },
  },
  extraReducers: {
    [fetchChats.pending]: () => {

    },
    [fetchChats.fulfilled]: (state, action) => {
      const newstate = state;
      newstate.chats = action.payload;
      console.log('Chat list to resp ');
      console.log(newstate.chats);
    },
    [fetchChats.rejected]: () => {

    },
  },
});
export default chatReducer.reducer;
export const {
  addMessage, loadChat, setFeedMessages,
  setGifs, setChatBoxesID, newMessagePress, removeChatBoxID, removeAvaterID,
  toggleNewMessage, deleteConversation, setChats, removeChatBoxIDOnly,
} = chatReducer.actions;
