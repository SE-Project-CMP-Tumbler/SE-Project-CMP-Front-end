import { configureStore } from '@reduxjs/toolkit';
import Chatreduser from './reducers/ChatReducer';

const store = configureStore({
  reducer: {
    Chat: Chatreduser,
  },
});

export default store;
