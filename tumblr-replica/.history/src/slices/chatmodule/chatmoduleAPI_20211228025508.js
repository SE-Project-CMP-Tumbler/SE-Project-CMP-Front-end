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
      /*
      const response = await api.get('all_chats', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log('hi frim fetch all chat');
      console.log(response.data);
      return response.data;
      */
     const response =  {
      "meta": {
        "status": "200",
        "msg": "ok"
      },
      "response": {
        "chat_messages": [
          {
            "text": "hello world!",
            "photo": "",
            "gif": "",
            "read": false,
            "blog_id": 2,
            "blog_avatar": "https://1.bp.blogspot.com/-ri-t_jE_GM4/Xxgw4ilrPrI/AAAAAAAAm88/iHmDzhRn24grXa15u_FWu8ksEc5L6byVgCLcBGAsYHQ/s1600/%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25A8%25D8%25B1%25D9%2588%25D9%2581%25D8%25A7%25D9%258A%25D9%2584-2.jpg",
            "blog_avatar_shape": "circle",
            "blog_username": "nadeen-ahmed213",
            "blog_title": "",
            "friend_id": 3,
            "friend_avatar": "https://1.bp.blogspot.com/-ri-t_jE_GM4/Xxgw4ilrPrI/AAAAAAAAm88/iHmDzhRn24grXa15u_FWu8ksEc5L6byVgCLcBGAsYHQ/s1600/%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25A8%25D8%25B1%25D9%2588%25D9%2581%25D8%25A7%25D9%258A%25D9%2584-2.jpg",
            "friend_avatar_shape": "circle",
            "friend_username": "ahmed-ahmed213",
            "friend_title": "Ahmed"
          },
          {
            "text": "hello world!",
            "photo": "",
            "gif": "",
            "read": false,
            "blog_id": 2,
            "blog_avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8cDW5DcPwWg2SuwnCEeniXdddi3kgtF-fg&usqp=CAU",
            "blog_avatar_shape": "circle",
            "blog_username": "nadeen-ahmed213",
            "blog_title": "",
            "friend_id": 4,
            "friend_avatar": "https://img.wattpad.com/cover/259072761-288-k591831.jpg",
            "friend_avatar_shape": "circle",
            "friend_username": "allaa-ahmed213",
            "friend_title": "Allaa"
          },
          {
            "text": "hello world!",
            "photo": "",
            "gif": "",
            "read": false,
            "blog_id": 2,
            "blog_avatar": "https://blogger.googleusercontent.com/img/a/AVvXsEiwC2ML1gwFe0B73u8_cT-yj-DAfgLYzw0Lps0glNxASUl5bqYKRcYL5_UMVn3KRroJw9ZcUJQEbXA1I1zdBHE5oXpuiQ45S8YwfgSEuIU9pCCf1pb4B8Gy4A0XpVtFmZwk3LSTEryQalFBYC1v43IFotAwwc8eUOCAjTQEOFmOL8wGMwJ0cEicPW6j=s16000",
            "blog_avatar_shape": "circle",
            "blog_username": "nadeen-ahmed213",
            "blog_title": "",
            "friend_id": 5,
            "friend_avatar": "https://blogger.googleusercontent.com/img/a/AVvXsEiwC2ML1gwFe0B73u8_cT-yj-DAfgLYzw0Lps0glNxASUl5bqYKRcYL5_UMVn3KRroJw9ZcUJQEbXA1I1zdBHE5oXpuiQ45S8YwfgSEuIU9pCCf1pb4B8Gy4A0XpVtFmZwk3LSTEryQalFBYC1v43IFotAwwc8eUOCAjTQEOFmOL8wGMwJ0cEicPW6j=s16000",
            "friend_avatar_shape": "circle",
            "friend_username": "maryem-ahmed213",
            "friend_title": "Maryem"
          },
          {
            "text": "hello world!",
            "photo": "",
            "gif": "",
            "read": false,
            "blog_id": 6,
            "blog_avatar": "https://1.bp.blogspot.com/-FZXji_IODBI/YKppykyjGhI/AAAAAAACDJU/JvRCsOgRZVIyrcC1BXN5GI1Mz795XRoxACLcBGAsYHQ/s640/%25D8%25A8%25D8%25B1%25D9%2588%25D9%2581%25D8%25A7%25D9%258A%25D9%2584-%25D9%2581%25D9%258A%25D8%25B3-%25D8%25A8%25D9%2588%25D9%2583032.jpg",
            "blog_avatar_shape": "circle",
            "blog_username": "radwa-ahmed213",
            "blog_title": "",
            "friend_id": 6,
            "friend_avatar": "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            "friend_avatar_shape": "circle",
            "friend_username": "radwa-ahmed213",
            "friend_title": "Radwa"
          },
          {
            "text": "hello world!",
            "photo": "",
            "gif": "",
            "read": false,
            "blog_id": 7,
            "blog_avatar": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            "blog_avatar_shape": "rectangle",
            "blog_username": "ahmed ali",
            "blog_title": "",
            "friend_id": 7,
            "friend_avatar": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            "friend_avatar_shape": "rectangle",
            "friend_username": "ahmed ali",
            "friend_title": "Ali"
          }
        ]
      }
    }
     return 
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
        from_blog_id: 15,
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

/**
 * this function get All the messages between the user and
 * a spacific friend using the room id between them
 * @method
 * @param {intger} chatRoomId  the chat room id between two friends
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
        from_blog_id: '15',
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
export const sendMessage = createAsyncThunk('Chat/sendMessage', async ({
  messageBody, newmessages, chatRoomId, User,
}) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.patch(`/messages/${chatRoomId}`, { response: { chat_messages: newmessages } });
      console.log(response.data);
      const payload = { res: response.data, messageBody };
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
    const payload = { res: response.data, messageBody };
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

export const getChatRoomId = createAsyncThunk('Chat/getChatRoomId', async ({
  blogsID, User, elem,
}) => {
  try {
    console.log('in chat rooom id');
    console.log(blogsID);
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
      data: {
        from_blog_id: 15,
        to_blog_id: 6,
      },
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

export const searchForChat = createAsyncThunk('Chat/searchForChat', async ({ User, searchWord }) => {
  try {
    if (SERVICETYPE === MOCK) {
      const response = await api.get('/chat_search');
      console.log('hi frim fetch follower');
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

export const zero = 0;
