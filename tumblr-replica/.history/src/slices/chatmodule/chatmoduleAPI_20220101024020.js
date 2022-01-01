/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, apiR } from '../../apis/globalAxpi';
import { MOCK, SERVICETYPE, apiREAL } from '../../apis/globalAPI';

/**
 * this function get All  the friends of the user that have a chat with him
 * @method
 * @param {object} User  Loged in user
 * @returns {object} response contain
 * all the info of the User's friends (that he has chat with them)
 */
export const getAllChats = createAsyncThunk('Chat/getAllChats', async (User) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('all_chats', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
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
        from_blog_id: User.primaryBlogId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

/**
 * this function get All the messages between the user and
 * a spacific friend using the room id between them
 * @method
 * @param {number} chatRoomId  the chat room id between two friends
 * @returns {object} response contain
 * all the messages in this chat room
 */
export const getChatFeed = createAsyncThunk('Chat/getChatFeed', async ({ chatRoomId, User }) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get(`/messages/${chatRoomId}`);
      console.log('hi from getChatFeed');
      console.log(response.data);
      return response.data;
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/chat/messages/${chatRoomId}`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        from_blog_id: User.primaryBlogId.toString(),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

/**
 * this function is used to send the message
 * @method
 * @param {object}  Message  the new message that the user has  written
 * @param {array} newmessages  the new feed
 * @param {number} chatRoomId  the chat room id between two friends
 * @param {object} User  the loged in user
 * @returns {object} contain the response of the post request and the
 * new message
 */
export const sendMessage = createAsyncThunk('Chat/sendMessage', async ({
  messageBody, newmessages, chatRoomId, User,
}) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.patch(`/messages/${chatRoomId}`, { response: { chat_messages: newmessages } });
      console.log(response.data);
      const payload = { res: response.data, messageBody, User };
      return payload;
    }
    console.log(messageBody);
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/chat/new_message/${chatRoomId}`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: messageBody,
    });
    console.log(response.data);
    const payload = { res: response.data, messageBody, User };
    return payload;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

/**
 * this function is used to get the room id of the chat between the two participant
 * @method
 * @param  blogsID the ids of the two blogs the have this 
 * @param  elem 
 * @param {object} User  the loged in user
 * @returns {object} contain the response of the post request and the
 * new message
 */

export const getChatRoomId = createAsyncThunk('Chat/getChatRoomId', async ({
  blogsID, User, elem,
}) => {
  try {
    console.log('in chat rooom id');
    console.log(blogsID);
    console.log(elem);
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
      data: blogsID,
    });
    const payload = {
      res: response.data,
      elem,
    };
    return payload;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

/**
 * this function is used to send the message
 * @method
 * @param {object}  Message  the new message that the user has  written
 * @param {array} newmessages  the new feed
 * @param {intger} chatRoomId  the chat room id between two friends
 * @param {object} User  the loged in user
 * @returns {object} contain the response of the post request and the
 * new message
 */
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
      url: `${apiREAL}/chat/clear_chat/${chatRoomId}`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        from_blog_id: User.primaryBlogId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

export const searchForChat = createAsyncThunk('Chat/searchForChat', async ({ User, searchWord }) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/chat_search');
      console.log('hi from searchForChat');
      console.log(response.data);
      return response.data;
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/chat/chat_search`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        from_blog_id: User.primaryBlogId,
        blog_username: searchWord,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw Error(err);
  }
});

/**
 * this function is used to send the message
 * @method
 * @param {object}  Message  the new message that the user has  written
 * @param {array} newmessages  the new feed
 * @param {intger} chatRoomId  the chat room id between two friends
 * @param {object} User  the loged in user
 * @returns {object} contain the response of the post request and the
 * new message
 */
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

/**
 * this function is used to send the message
 * @method
 * @param {object}  Message  the new message that the user has  written
 * @param {array} newmessages  the new feed
 * @param {intger} chatRoomId  the chat room id between two friends
 * @param {object} User  the loged in user
 * @returns {object} contain the response of the post request and the
 * new message
 */
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
/**
 * this function is used to send the message
 * @method
 * @param {object}  Message  the new message that the user has  written
 * @param {array} newmessages  the new feed
 * @param {intger} chatRoomId  the chat room id between two friends
 * @param {object} User  the loged in user
 * @returns {object} contain the response of the post request and the
 * new message
 */
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
/**
 * this function is used to send the message
 * @method
 * @param {object}  Message  the new message that the user has  written
 * @param {array} newmessages  the new feed
 * @param {intger} chatRoomId  the chat room id between two friends
 * @param {object} User  the loged in user
 * @returns {object} contain the response of the post request and the
 * new message
 */
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

export const getChatRoomIdRes = createAsyncThunk('Chat/getChatRoomIdRes', async ({ blogsID, User }) => {
  try {
    console.log('in chat rooom id');
    console.log(blogsID);
    if (SERVICETYPE === MOCK) {
      /*
      const response = await api.get(`/chat_id/${blogsID.to_blog_id}`);
      console.log('hi frim fetch follower');
      console.log(response.data);
      const payload = {
        res: response.data,
      };
      return payload;
      */
    }
    const response = await axios({
      method: 'POST',
      url: `${apiREAL}/chat/chat_id`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: blogsID,
    });
    console.log(response.data.response.chat_room_id);
    return response.data.response.chat_room_id;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
});

export const getBlogIdFromBlogUN = createAsyncThunk('Chat/getBlogIdFromBlogUN ', async ({ blogUserName, User, isUser }) => {
  try {
    console.log(blogUserName);
    if (SERVICETYPE === MOCK) {
      /*
      const response = await api.get(`/messages/${chatRoomId}`);
      console.log('hi from getChatFeed');
      console.log(response.data);
      return response.data;
      */
    }
    const response = await axios({
      method: 'GET',
      url: `${apiREAL}/blog/info/${blogUserName}`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data.response.id);
    // const payload = {
    //   res: response.data,
    //   isUser,
    // };
    // return payload;
    return response.data.response.id;
  } catch (err) {
    throw Error(err);
  }
});
export const setBlogFriendName = createAsyncThunk('Chat/setBlogFriendName ', async ({ blogUserName, User }) => {
  try {
    console.log(blogUserName);
    if (SERVICETYPE === MOCK) {
      /*
      const response = await api.get(`/messages/${chatRoomId}`);
      console.log('hi from getChatFeed');
      console.log(response.data);
      return response.data;
      */
    }
    const response = await axios({
      method: 'GET',
      url: `${apiREAL}/blog/info/${blogUserName}`,
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
export const zero = 0;
