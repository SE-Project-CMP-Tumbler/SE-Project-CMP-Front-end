import { createSlice } from '@reduxjs/toolkit';
import fetchCheckout from './checkoutAPI';

const checkout = createSlice({
  name: 'checkout',
  initialState: {
    blogs: [],
    next_page_url: '',
    prev_page_url: '',
  },
  reducers: {
    setChecks: (state, { payload }) => {
      const s = state;
      s.blogs = payload;
    },
  },
  extraReducers: {
    [fetchCheckout.pending]: () => {
    },
    [fetchCheckout.fulfilled]: (state, { payload }) => {
      console.log(payload);
      const s = state;
      s.blogs = payload.blogs;
      s.next_page_url = payload.next_page_url;
      s.prev_page_url = state.prev_page_url;
    },
    [fetchCheckout.rejected]: () => {
    },
  },
});
export const { setChecks } = checkout.actions;
export const getcheck = (state) => state.checkout;
export default checkout.reducer;
