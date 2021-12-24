import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BlockedByApi from '../../apis/BlogApi';

const USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDU2MGM5MTUzMjQ0NDc3NWVlYWViYzIwZTQyNjZiMmM4MWY5M2FhOWFiNDQ2ZTEwYTIxZTY5NDYwMDRmOTljOTFhMmNiNTBlZGMyMDUyZTQiLCJpYXQiOjE2NDAxMjUwMDUuNjM5ODAyLCJuYmYiOjE2NDAxMjUwMDUuNjM5ODA2LCJleHAiOjE2NzE2NjEwMDUuNjM2NjI0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.avTBVm-XObWmxPuMdCrkuNmJ_2tfa-mBDeVauZdxd8zAyf7mwjBYtiCNrkWHWry35exuTdX33nKi-_bxSucjtavYoL0xH1MCWD32sJ8QZppF7x2B1tW4TgFivA-MhjSISPZ0JjKnqpOAIH0CYQSSsEf_Hw1c7sBlcTCbjP_Zt03ps75lQfSmzl3qIWsNovlmIQj70WkwkDvdO7FF_KhUDG8NMm-eHfWM_Qf54CGSdma4ZxSf73vNotoC7NyadAKvnxR8yuT76GBk1kcF0UhA9l3cw_tEGRlCZg4zu30GcyJDoSU0Qg2Jp6a6GbLh7tjZWBKIMMAyq9FmjbTB4_9-pG_oWv75lUANyeEfWfWGi8rJ62MRbQpuikJ0O7XuqfMMwCFjM9Aja22lEtwYFZl5Al8-78uudj8ek4xO2wtlSgISpJieXp_qlpvYVnn-xuV-wmdPyjuspZAzCYYiL3UpuR3PvqOQiMdXgeJB9kZj6vBq8fKg8zP6sbOF8qVuFis7mTTdU_mCwyuONn8NLxFLK8L0CYCvyNIPxj35oRfDH_sf-OiEO155m6MWnIIx7zXWg9yhNJQBHxM3fM8GSq_XbJHyEqk5pUkVq5JkOIzkNrqRLZXwDPzPSZ2ppAqivLqqQx3kXPXmivjax2bZFTw69ZEreuXiNm8dHCoaXHuhjyA';
const AuthStr = `Bearer ${USER_TOKEN}`;

const BlockedByAsynch = createAsyncThunk(
  'blocked_by/:blog_id',
  async (BlogId, MyBlog) => {
    console.log(MyBlog);
    const response = await BlockedByApi.get(`block/4/${BlogId}`, { headers: { Authorization: AuthStr } });
    return response.data;
  },
);

const initialState = {
  blocked: { response: {}, meta: { status: '000', msg: 'Loading' } },
};

const BlockedBySlice = createSlice({
  name: 'blocked',
  initialState,
  reducers: {},
  extraReducers: {
    [BlockedByAsynch.pending]: () => {
      // console.log('Pending');
    },
    [BlockedByAsynch.fulfilled]: (state, { payload }) => ({ ...state, blocked: payload }),
    [BlockedByAsynch.rejected]: () => {
      // console.log('Rejected!');
    },

  },
});

const getBlocked = (state) => state.blocked.blocked;
const BlockedReducer = BlockedBySlice.reducer;
export {
  getBlocked,
  BlockedByAsynch,
};
export default BlockedReducer;
