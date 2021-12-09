import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gifs: [],
  chatbox: [],
  chats: [],
  avatars: [],
  Isloading: false,
  newmessagepress: false,
};
const chatReducer = createSlice({
  name: 'Chatreduser',
  initialState,
  reducers: {
    /**
    * This function to set the  messages in the feed when new message has sent
    * @method
    * @param {object} state the object contain the messages to be updated
    * @param {object} action the message to be added to the chat feed
    */
    setFeedMessages: (state, action) => {
      const newstate = state;
      newstate.messages = action.payload.messages;
    },
    /**
    * This function to set the the gifs in the menu in the chat down bar for gifs
    * @method
    * @param {object} state the object contain the gifs to be uploaded
    * @param {object} action the gifs to be added to the menu
    */
    setGifs: (state, action) => {
      const newstate = state;
      newstate.gifs = action.payload.gifs;
    },
    /**
    * This function to set the chats that will be opened and active
    * @method
    * @param {object} state the object contain the chat boxes
    * @param {object} action the new chat box to be added
    */
    setChatBoxesID: (state, action) => {
      state.chatbox.push(action.payload);
    },
    /**
    * This function to set the state of newmessage depend on this state ChatTo component
    * will apear or OldChatList component
    * @method
    * @param {object} state the object contain the newmessagepress state
    */
    newMessagePress: (state) => {
      const newstate = state;
      newstate.newmessagepress = !state.newmessagepress;
    },
    /**
    * This function to remove chat Box and convert it to avater when
    * the user press Southeastarrow for minimization
    * @method
    * @param {object} state the object contain the chatBoxes and avatars state
    * @param {object} action the object contain chat box id and user's img
    */
    removeChatBoxID: (state, action) => {
      const newstate = state;
      const newChatBoxes = state.chatbox.filter((elem) => elem !== action.payload.id);
      newstate.chatbox = newChatBoxes;
      newstate.avatars.push(action.payload);
    },
    /**
    * This function to remove chat Box only when close icon in the chat top bar is pressed
    * @method
    * @param {object} state the object contain the chatBoxes and avatars state
    * @param {object} action the object contain chat box id and user's img
    */
    removeChatBoxIDOnly: (state, action) => {
      const newstate = state;
      const newChatBoxes = state.chatbox.filter((elem) => elem !== action.payload);
      newstate.chatbox = newChatBoxes;
    },
    /**
    * This function to remove avatar and open the chat box when
    * the user press Southeastarrow for minimization
    * @method
    * @param {object} state the object contain the chatBoxes and avatars state
    * @param {object} action the object contain avater id
    */
    removeAvaterID: (state, action) => {
      const newstate = state;
      const newAvaters = state.avatars.filter((elem) => elem.id !== action.payload);
      newstate.avatars = newAvaters;
      newstate.chatbox.push(action.payload);
    },
    /**
    * This function to get the all the user's chats
    * @method
    * @param {object} state the object contain the chats state
    * @param {object} action the object for the chats come from json server
    */
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
