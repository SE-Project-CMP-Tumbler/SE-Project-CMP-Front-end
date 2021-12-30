import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../apis/globalAPI';

const fetchAsyncAllMessages = createAsyncThunk(
  'blog/allmessages',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('allmessages');
        return response.data;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        const USER_TOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USER_TOKEN}`;
        const response = await apiR.get('all_messages', { headers: { Authorization: AuthStr } });
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  allmessages: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const AllmessagesSlice = createSlice({
  name: 'allmessages',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncAllMessages.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncAllMessages.fulfilled]:
      (state, { payload }) => ({ ...state, allmessages: payload }),
    [fetchAsyncAllMessages.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getAllMessages = (state) => state.allmessages.allmessages;
const AllMessagesReducer = AllmessagesSlice.reducer;
export {
  getAllMessages,
  fetchAsyncAllMessages,
};
export default AllMessagesReducer;
