import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gifs: [],
  chatbox: [],
  chats: [],
  avatars: [],
  newmessage: false,
  Isloading: false,
  newmessagepress: false,
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
    setChats: (state, action) => {
      const newstate = state;
      newstate.chats = action.payload;
    },
  },
});
export default chatReducer.reducer;
export const {
  addMessage, loadChat, setFeedMessages,
  setGifs, setChatBoxesID, newMessagePress, removeChatBoxID, removeAvaterID,
  toggleNewMessage, deleteConversation, setChats, removeChatBoxIDOnly,
} = chatReducer.actions;
