import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { MOCK, SERVICETYPE, apiREAL } from '../../apis/globalAPI';

export const getAllChats = createAsyncThunk('Chat/getAllChats', async () => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/all_chats');
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.get('/all_chats');
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const getChatFeed = createAsyncThunk('Chat/getChatFeed', async (id) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get(`/mockmessages/${id}`);
      console.log('hi frim getChatFeed');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.get(`/messages/${id}`);
    return response.data.response;
  } catch (err) {
    throw Error(err);
  }
});
export const sendMessage = createAsyncThunk('Chat/sendMessage', async (blogID, message, newmessages) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.patch(`/mockmessages/${blogID}`, { chat_messages: newmessages });
      console.log('hi frim fetch follower');
      console.log(response.data);
      const payload = { res: response.data, message };
      return payload;
    }
    const response = await apiR.post(`/messages/${blogID}`, { data: message });
    const payload = { res: response.data, message };
    return payload;
  } catch (err) {
    throw Error(err);
  }
});

export const getChatRoomId = createAsyncThunk('Chat/sendMessage', async ({ blogsID, User }) => {
  try {
    if (SERVICETYPE === MOCK) {
      /*
      const response = await api.patch(`/mockmessages/${blogID}`, { chat_messages: newmessages });
      console.log('hi frim fetch follower');
      console.log(response.data);
      const payload = { res: response.data, message };
      return payload;
      */
    }
    const response = await axios({
      method: 'GET',
      url: `${apiREAL}//chat/chat_id`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      {data:blogsID}
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const deleteMessages = createAsyncThunk('Chat/deleteMessages', async (blogID) => {
  try {
    if (SERVICETYPE === MOCK) {
      console.log(blogID);
      const response = await api.delete(`/delete_messages/${blogID}`);
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.delete(`/delete_messages/${blogID}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const chatSearch = createAsyncThunk('Chat/chatSearch', async (blogID) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.post(`/new_messages/${blogID}`);
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.post(`/new_messages/${blogID}`);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});
export const recentlyFollowed = createAsyncThunk('Chat/recentlyFollowed', async () => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/Recently_followed');
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.get('/Recently_followed');
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});
export const uploadPhoto = createAsyncThunk('Chat/uploadPhoto', async () => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.post('/upload_photo');
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.post('/upload_photo');
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});
export const getAllGifs = createAsyncThunk('Chat/getAllGifs', async () => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/gif');
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.get('/gif');
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const zero = 0;
