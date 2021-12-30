import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiR } from '../../apis/globalAxpi';

const DeleteAllMsgAsynch = createAsyncThunk(
  'delete/all_messages',
  async (dispatch, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.delete('all_messages', { headers: { Authorization: AuthStr, Accept: 'application/json', 'Content-Type': 'application/json' } });
    return response.data;
  },
);

const initialState = {
  deleteallmsg: { meta: { status: '000', msg: 'Loading' } },
};

const deleteAllMessagesSlice = createSlice({
  name: 'deleteallmsg',
  initialState,
  reducers: {},
  extraReducers: {
    [DeleteAllMsgAsynch.pending]: () => { },
    [DeleteAllMsgAsynch.fulfilled]: (state, { payload }) => ({ ...state, deleteallmsg: payload }),
    [DeleteAllMsgAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getdeleteAllMessages = (state) => state.deleteallmsg.deleteallmsg;
const deleteAllMessagesReducer = deleteAllMessagesSlice.reducer;
export {
  getdeleteAllMessages,
  DeleteAllMsgAsynch,
};
export default deleteAllMessagesReducer;
