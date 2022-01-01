import { createSlice } from '@reduxjs/toolkit';
import {
  getChatFeed, getAllChats, searchForChat, getChatRoomIdRes,
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
  recentlyfollowed: [],
  newmessagepressres: false,
  chatroomid: '',
  blogsToChat: [],
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
      const newAvaters = state.avatars.filter((elem) => elem.res.response.chat_room_id
      !== payload?.res.response.chat_room_id);
      console.log(newAvaters);
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
      const pay = {
        text: payload.text,
        photo: payload.photo,
        gif: payload.gif,
        read: payload.read,
        blog_username: payload.from_blog_username,
        from_blog_id: payload.from_blog_id,
        blog_avatar: payload.from_blog_avatar,
        blog_avatar_shape: payload.from_blog_avatar_shape,
        blog_title: payload.blog_title,
      };
      newstate.chatfeed.push(pay);
    },
    filterBlogsChat: (state, { payload }) => {
      const newstate = state;
      console.log(newstate.blogsToChat);
      const newFilter = newstate.blogsToChat.filter(
        (value) => value.friend_username.toLowerCase().includes(payload.toLowerCase()),
      );
      newstate.blogsToChat = newFilter;
      if (payload.length === 0) {
        newstate.blogsToChat = [];
      }
    },
  },
  extraReducers: {
    [getAllChats.pending]: () => {
      console.log('pendddddd');
      console.log(initialState);
    },
    [getAllChats.fulfilled]: (state, { payload }) => {
      const newstate = state;
      console.log('Get all chats is done');
      if (payload?.meta.status === '200') {
        newstate.chats = payload?.response.chat_messages;
      }
    },
    [getAllChats.rejected]: () => {
      console.log('pendddddd');
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
      if (SERVICETYPE === MOCK) {
        const newstate = state;
        newstate.chatfeed.push(payload?.messageBody);
      } else {
        const newstate = state;
        if (payload?.res.meta.status === '200') {
          console.log(payload?.messageBody);
          newstate.chatfeed.push(payload?.messageBody);
          console.log('chat feed is got suc ');
        }
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
    [recentlyFollowed.fulfilled]: (state, { payload }) => {
      if (SERVICETYPE !== MOCK) {
        console.log(payload);
        const newstate = state;
        if (payload?.meta.status === '200') {
          newstate.recentlyfollowed = payload?.response.followings;
          console.log(`payload ${payload?.response.followings}`);
          console.log(newstate.recentlyfollowed);
        }
      } else {
        console.log(payload);
        const newstate = state;
        if (payload?.meta.status === '200') {
          newstate.recentlyfollowed = payload?.response.chat_messages;
        }
      }
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
      if (payload?.res.meta.status === '200') {
        newstate.chatroomid = payload?.res.response.chat_room_id;
        console.log(`chat room id is ${newstate.chatroomid}`);
        if (state.chatbox.length) {
          console.log(state.chatbox.length);
          newstate.avatars.push(state.chatbox[0]);
          newstate.chatbox = [];
          console.log('set chat boxeses id entered');
        }
        state.chatbox.push(payload);
        console.log(payload);
      }
    },
    [getChatRoomId.rejected]: () => {

    },
    [searchForChat.pending]: () => {

    },
    [searchForChat.fulfilled]: (state, { payload }) => {
      console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
      console.log(payload);
      const newstate = state;
      if (payload?.meta.status === '200') {
        newstate.blogsToChat = payload?.response.blogs;
      }
    },
    [searchForChat.rejected]: () => {

    },
    [getChatRoomIdRes.pending]: () => {

    },
    [getChatRoomIdRes.fulfilled]: (state, { payload }) => {
      console.log('hiiiiiiiiiiiiiiiiiiiiiiii from getChatRoomIdRes');
      const newstate = state;
      if (payload?.meta.status === '200') {
        return payload?.response.chat_room_id;
      }
    },
    [getChatRoomIdRes.rejected]: () => {

    },
  },
});
export default chatReducer.reducer;
export const {
  addMessage, loadChat, setFeedMessages,
  setGifs, setChatBoxesID, newMessagePress, removeChatBoxID, removeAvaterID,
  toggleNewMessage, filterBlogsChat,
  deleteConversation, setChats, removeChatBoxIDOnly, chatUpdate, newMessagePressRes,
} = chatReducer.actions;
