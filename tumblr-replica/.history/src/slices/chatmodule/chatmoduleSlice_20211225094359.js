import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getChatFeed,
  sendMessage, chatSearch, recentlyFollowed, uploadPhoto, getAllGifs, deleteMessages, getChatRoomId,
} from './chatmoduleAPI';
import { MOCK, SERVICETYPE } from '../../apis/globalAPI';
import { api, apiR } from '../../apis/globalAxpi';

const initialState = {
  gifs: [],
  chatbox: [],
  chats: [],
  avatars: [],
  chatfeed: [],
  newmessage: false,
  Isloading: false,
  newmessagepress: false,
  recentlyfollowed: [],
  newmessagepressres: false,
  chatroomid: '',
};
export const getAllChats = createAsyncThunk('Chat/getAllChats', async (User) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/all_chats');
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.post('/chat/all_chats', {
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        from_blog_id: User.id,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
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
    setChatBoxesID: (state, { payload }) => {
      if (state.chatbox.length) {
        console.log(state.chatbox.length);
        const newstate = state;
        newstate.avatars.push(state.chatbox[0]);
        newstate.chatbox = [];
        console.log('set chat boxeses id entered');
      }
      state.chatbox.push(payload);
    },
    newMessagePress: (state) => {
      const newstate = state;
      newstate.newmessagepress = !state.newmessagepress;
    },
    newMessagePressRes: (state) => {
      const newstate = state;
      newstate.newmessagepressres = !state.newmessagepressres;
      console.log(newstate.newmessagepressres);
    },
    removeChatBoxID: (state) => {
      const newstate = state;
      newstate.avatars.push(newstate.chatbox[0]);
      newstate.chatbox = [];
      // newstate.avatars.push(action.payload);
    },
    removeChatBoxIDOnly: (state) => {
      const newstate = state;
      newstate.chatbox = [];
    },
    removeAvaterID: (state, { payload }) => {
      const newstate = state;
      const newAvaters = state.avatars.filter((elem) => elem.chatRoomId !== payload?.chatRoomId);
      newstate.avatars = newAvaters;
      if (state.chatbox.length) {
        console.log(state.chatbox.length);
        newstate.avatars.push(state.chatbox[0]);
        newstate.chatbox = [];
      }
      newstate.chatbox.push(payload);
    },
    toggleNewMessage: (state) => {
      const newstate = state;
      newstate.newmessage = !state.newmessage;
    },
    chatUpdate: (state, { payload }) => {
      const newstate = state;
      newstate.chatfeed.push(payload);
    },
  },
  extraReducers: {
    [getAllChats.pending]: () => {
      console.log('pendddddd');
      console.log(initialState);
    },
    [getAllChats.fulfilled]: (state, { payload }) => {
      const newstate = state;
      console.log('pendddddd');
      if (payload?.meta.status === '200') {
        newstate.chats = payload?.response.chat_messages;
      }
    },
    [getAllChats.rejected]: () => {
      console.log('pendddddd');
      console.log(initialState);
    },
    [getChatFeed.pending]: () => {

    },
    [getChatFeed.fulfilled]: (state, { payload }) => {
      const newstate = state;
      if (payload?.meta.status === '200') {
        newstate.chatfeed = payload?.response.chat_messages;
        console.log('chat feed is got suc ');
      }
    },
    [getChatFeed.rejected]: () => {

    },
    [sendMessage.pending]: () => {

    },
    [sendMessage.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (SERVICETYPE !== MOCK) {
        const newstate = state;
        newstate.chatfeed= payload?.res.response.chat_messages
      } else {
        console.log('chat feed is got suc ');
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
      newstate.recentlyfollowed = action.payload;
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
      console.log(payload);
      if (payload?.res.meta.status === '200') {
        console.log('conversation deleted suc');
        newstate.chatroomid = payload?.res.response.chat_room_id;
        console.log(`chat room id is ${newstate.chatroomid}`);
        if (state.chatbox.length) {
          console.log(state.chatbox.length);
          newstate.avatars.push(state.chatbox[0]);
          newstate.chatbox = [];
          console.log('set chat boxeses id entered');
        }
        state.chatbox.push(payload);
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
  toggleNewMessage,
  deleteConversation, setChats, removeChatBoxIDOnly, chatUpdate, newMessagePressRes,
} = chatReducer.actions;
