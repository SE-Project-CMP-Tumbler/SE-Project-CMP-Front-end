import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiR } from '../../apis/globalAxpi';

const DeleteSubmitAsynch = createAsyncThunk(
  'delete/submit',
  async (postId, { getState }) => {
    const state = getState();
    const USER_TOKEN = state.user.user.accessToken;
    const AuthStr = `Bearer ${USER_TOKEN}`;
    const response = await apiR.delete('post/submission/' + postId, { headers: { Authorization: AuthStr, Accept: 'application/json', 'Content-Type': 'application/json' } });
    return response.data;
  },
);

const initialState = {
  deletesubmit: { meta: { status: '000', msg: 'Loading' } },
};

const deleteSubmitSlice = createSlice({
  name: 'deletesubmit',
  initialState,
  reducers: {},
  extraReducers: {
    [DeleteSubmitAsynch.pending]: () => { },
    [DeleteSubmitAsynch.fulfilled]: (state, { payload }) => ({ ...state, deletesubmit: payload }),
    [DeleteSubmitAsynch.rejected]: () => {
      // console.log('Rejected!');
    },
  },
});

const getDeleteSubmit = (state) => state.deletesubmit.deletesubmit;
const deleteSubmitReducer = deleteSubmitSlice.reducer;
export {
  getDeleteSubmit,
  DeleteSubmitAsynch,
};
export default deleteSubmitReducer;
