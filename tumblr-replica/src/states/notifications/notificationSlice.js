/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';
import { fetchNotifications } from './notificationAPI';

const blogNotifications = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    isLoading: true,
    error: null,
  },
  reducers: {

  },

  extraReducers: {
    [fetchNotifications.pending]: (state) => {
      const s = state;
      s.isLoading = true;
      console.log('loaaaading');
    },
    [fetchNotifications.fulfilled]: (state, { payload }) => {
      const s = state;
      s.notifications = payload;
      s.isLoading = false;
    },
    [fetchNotifications.rejected]: (state, action) => {
      const s = state;
      s.error = action.error.message;
      console.log('boom', s.error);
      // need to later work on an error page/pop up and set loading to false.
    },
  },
});

export const selectNotifications = (state) => state.notifications;
export { fetchNotifications };
export default blogNotifications.reducer;
