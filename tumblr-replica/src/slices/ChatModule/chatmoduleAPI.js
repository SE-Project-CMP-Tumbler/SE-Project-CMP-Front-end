import AxiosApi, { MOCK, SERVICETYPE } from '../../apis/globalAxpi';

export const fetchChats = createAsyncThunk('Chat/fetchChats', async () => {
  try {
    console.log('helo fron async function');
    const response = await axios({
      method: 'GET',
      url: `${apiBaseUrl}/chatsforoneuser`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.data);
    return response;
  } catch (err) {
    throw Error(err);
  }
});

export const getAllChats = createAsyncThunk('Chat/getAllChats', async () => {
    try {
        if (SERVICETYPE === MOCK) {
          const response = await AxiosApi.get('/all_chats');
          console.log('hi frim fetch follower');
          console.log(response.data);
          return response.data;
        }
        const response = await AxiosApi.get('/all_chats');
        return response.data;
      } catch (err) {
        throw Error(err);
      }
  });

  export const getChatFeed = createAsyncThunk('Chat/getChatFeed', async ({blogID}) => {
    try {
        if (SERVICETYPE === MOCK) {
          const response = await AxiosApi.get(`/messages/${blogID}`);
          console.log('hi frim fetch follower');
          console.log(response.data);
          return response.data;
        }
        const response = await AxiosApi.get(`/messages/${blogID}`);
        return response.data;
      } catch (err) {
        throw Error(err);
      }
  });
  export const sendMessage = createAsyncThunk('Chat/sendMessage', async ({blogID}) => {
    try {
        if (SERVICETYPE === MOCK) {
          const response = await AxiosApi.post(`/new_messages/${blogID}`);
          console.log('hi frim fetch follower');
          console.log(response.data);
          return response.data;
        }
        const response = await AxiosApi.post(`/new_messages/${blogID}`);
        return response.data;
      } catch (err) {
        throw Error(err);
      }
  });
  export const chatSearch = createAsyncThunk('Chat/chatSearch', async () => {
    try {
        if (SERVICETYPE === MOCK) {
          const response = await AxiosApi.post(`/new_messages/${blogID}`);
          console.log('hi frim fetch follower');
          console.log(response.data);
          return response.data;
        }
        const response = await AxiosApi.post(`/new_messages/${blogID}`);
        return response.data;
      } catch (err) {
        throw Error(err);
      }
  });
  export const recentlyFollowed = createAsyncThunk('Chat/recentlyFollowed', async () => {
    try {
        if (SERVICETYPE === MOCK) {
          const response = await AxiosApi.get(`/Recently_followed${blogID}`);
          console.log('hi frim fetch follower');
          console.log(response.data);
          return response.data;
        }
        const response = await AxiosApi.get(`/new_messages/${blogID}`);
        return response.data;
      } catch (err) {
        throw Error(err);
      }
  });
  export const fetchChats = createAsyncThunk('Chat/fetchChats', async () => {
    try {
      console.log('helo fron async function');
      const response = await axios({
        method: 'GET',
        url: `${apiBaseUrl}/chatsforoneuser`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.data);
      return response;
    } catch (err) {
      throw Error(err);
    }
  });


export const zero = 0;
