/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const currentTheme = createSlice({
  name: 'currentTheme',
  initialState: {
    // There are seven possible themes including the default (which is the 6th)
    theme: localStorage.getItem('theme') ? (localStorage.getItem('theme')) : 6,
  },
  reducers: {
    setTheme: (state, action) => {
      const s = state;
      s.theme = action.payload;
      localStorage.setItem('theme', s.theme);
    },
  },

});

export const selectTheme = (state) => state.currentTheme;
export const { setTheme } = currentTheme.actions;
export default currentTheme.reducer;
