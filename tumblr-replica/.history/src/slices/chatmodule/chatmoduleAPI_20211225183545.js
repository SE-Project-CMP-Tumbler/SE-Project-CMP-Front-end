/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from '@'
import { api, apiR } from '../../apis/globalAxpi';
import { MOCK, SERVICETYPE, apiREAL } from '../../apis/globalAPI';

export const getAllChats = createAsyncThunk('Chat/getAllChats', async (User) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/all_chats');
      console.log('hi frim fetch all chat');
      console.log(response.data);
      return response.data;
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/chat/all_chats`,
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
    console.log('hello from get all chatssssssssssss');
    return response.data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

export const getChatFeed = createAsyncThunk('Chat/getChatFeed', async (chatRoomId) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get(`/messages/${chatRoomId}`);
      console.log('hi from getChatFeed');
      console.log(response.data);
      return response.data;
    }
    const response = await apiR.get(`/messages/${chatRoomId}`);
    return response.data.response;
  } catch (err) {
    throw Error(err);
  }
});
export const sendMessage = createAsyncThunk('Chat/sendMessage', async ({
  Message, newmessages, chatRoomId, User,
}) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.patch(`/messages/${chatRoomId}`, { response: { chat_messages: newmessages } });
      console.log('Start send message operatiiiiiiiiiiiiiiiiiion');
      console.log(response.data);
      const payload = { res: response.data, Message };
      return payload;
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/new_messages/${chatRoomId}`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: Message,
    });
    console.log(response.data);
    const payload = { res: response.data, Message };
    return payload;
  } catch (err) {
    throw Error(err);
  }
});

export const getChatRoomId = createAsyncThunk('Chat/getChatRoomId', async ({
  blogsID, User, elem,
}) => {
  try {
    const params = new url.URLSearchParams(blogsID);
    console.log(params.toString(), 'plzzzzzzzzzzz');
    if (SERVICETYPE === MOCK) {
      const response = await api.get(`/chat_id/${blogsID.to_blog_id}`);
      console.log('hi frim fetch follower');
      console.log(response.data);
      const payload = {
        res: response.data,
        elem,
      };
      return payload;
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/chat/chat_id`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: params.toString(),
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

export const deleteMessages = createAsyncThunk('Chat/deleteMessages', async ({ chatRoomId, User }) => {
  try {
    if (SERVICETYPE === MOCK) {
      console.log(chatRoomId);
      const response = await api.delete(`/delete_messages/${chatRoomId}`);
      console.log('hi frim fetch follower');
      console.log(response.data);
      return response.data;
    }
    const response = await axios({
      method: 'DELETE',
      url: `${apiREAL}/clear_chat/${chatRoomId}`,
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
export const recentlyFollowed = createAsyncThunk('Chat/recentlyFollowed', async (User) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/all_chats');
      console.log('hi from  recentlyFollowed');
      console.log(response.data);
      return response.data;
    }
    console.log('hi from  recentlyFollowed');
    const response = await apiR.get('/followings', {
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
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
