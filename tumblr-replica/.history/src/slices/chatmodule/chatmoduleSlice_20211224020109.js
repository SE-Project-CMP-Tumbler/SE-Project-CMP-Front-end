import { createSlice } from '@reduxjs/toolkit';
import {
  getAllChats,
  getChatFeed,
  sendMessage, chatSearch, recentlyFollowed, uploadPhoto, getAllGifs, deleteMessages, getChatRoomId,
} from './chatmoduleAPI';
import { MOCK, SERVICETYPE } from '../../apis/globalAPI';

const initialState = {
  gifs: [],
  chatbox: [],
  chats: [],
  avatars: [],
  chatfeed: [],
  newmessage: false,
  Isloading: false,
  newmessagepress: false,
  chatroomid: '',
};

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
    setChatBoxesID: (state, { payload }) => {
      if (state.chatbox.length) {
        console.log(state.chatbox.length);
        const newstate = state;
        newstate.avatars.push(state.chatbox[0]);
        newstate.chatbox = [];
      }
      state.chatbox.push(payload);
    },
    newMessagePress: (state) => {
      const newstate = state;
      newstate.newmessagepress = !state.newmessagepress;
    },
    removeChatBoxID: (state, action) => {
      const newstate = state;
      newstate.chatbox = [];
      newstate.avatars.push(action.payload);
    },
    removeChatBoxIDOnly: (state) => {
      const newstate = state;
      newstate.chatbox = [];
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
    [getAllChats.pending]: () => {

    },
    [getAllChats.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.meta.status === '200') {
        newstate.chats = payload?.chats;
      }
    },
    [getAllChats.rejected]: () => {

    },
    [getChatFeed.pending]: () => {

    },
    [getChatFeed.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.meta.status === '200') {
        newstate.chatfeed = payload?.chat_messages;
        console.log('chat feed is got suc ');
      }
    },
    [getChatFeed.rejected]: () => {

    },
    [sendMessage.pending]: () => {

    },
    [sendMessage.fulfilled]: (state, { payload }) => {
      const newstate = state;
      console.log(payload);
      if (SERVICETYPE !== MOCK) {
        if (payload?.res.meta.status === '200') {
          newstate.chatfeed.push(payload?.Message);
          console.log('chat feed is got suc ');
        }
      } else {
        newstate.chatfeed.push(payload?.Message);
      }
    },
    [sendMessage.rejected]: () => {

    },
    [chatSearch.pending]: () => {

    },
    [chatSearch.fulfilled]: (state, action) => {
      const newstate = state;
      newstate.chats = action.payload;
      console.log('Chat list to resp ');
      console.log(newstate.chats);
    },
    [chatSearch.rejected]: () => {

    },
    [recentlyFollowed.pending]: () => {

    },
    [recentlyFollowed.fulfilled]: (state, action) => {
      const newstate = state;
      newstate.chats = action.payload;
      console.log('Chat list to resp ');
      console.log(newstate.chats);
    },
    [recentlyFollowed.rejected]: () => {

    },
    [uploadPhoto.pending]: () => {

    },
    [uploadPhoto.fulfilled]: (state, action) => {
      const newstate = state;
      newstate.chats = action.payload;
      console.log('Chat list to resp ');
      console.log(newstate.chats);
    },
    [uploadPhoto.rejected]: () => {

    },
    [getAllGifs.pending]: () => {

    },
    [getAllGifs.fulfilled]: (state, action) => {
      const newstate = state;
      newstate.chats = action.payload;
      console.log('Chat list to resp ');
      console.log(newstate.chats);
    },
    [getAllGifs.rejected]: () => {

    },
    [deleteMessages.pending]: () => {

    },
    [deleteMessages.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.meta.status === '200') {
        console.log('conversation deleted suc');
        newstate.chatfeed = [];
      }
    },
    [deleteMessages.rejected]: () => {

    },
    [getChatRoomId.pending]: () => {

    },
    [getChatRoomId.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.meta.status === '200') {
        console.log('conversation deleted suc');
        newstate.chatroomid = payload?.response.chat_room_id;
      }
    },
    [getChatRoomId.rejected]: () => {

    },
  },
});
export default chatReducer.reducer;
export const {
  addMessage, loadChat, setFeedMessages,
  setGifs, setChatBoxesID, newMessagePress, removeChatBoxID, removeAvaterID,
  toggleNewMessage, deleteConversation, setChats, removeChatBoxIDOnly,
} = chatReducer.actions;
