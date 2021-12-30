import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiR } from '../../apis/globalAxpi';

const DeleteAskAsynch = createAsyncThunk(
  'delete/ask',
  async (questionId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.delete('ask/' + questionId, { headers: { Authorization: AuthStr, Accept: 'application/json', 'Content-Type': 'application/json' } });
    return response.data;
  },
);

const initialState = {
  deleteask: { meta: { status: '000', msg: 'Loading' } },
};

const deleteAskSlice = createSlice({
  name: 'deleteask',
  initialState,
  reducers: {},
  extraReducers: {
    [DeleteAskAsynch.pending]: () => { },
    [DeleteAskAsynch.fulfilled]: (state, { payload }) => ({ ...state, deleteask: payload }),
    [DeleteAskAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getDeleteAsk = (state) => state.deleteask.deleteask;
const deleteAskReducer = deleteAskSlice.reducer;
export {
  getDeleteAsk,
  DeleteAskAsynch,
};
export default deleteAskReducer;
