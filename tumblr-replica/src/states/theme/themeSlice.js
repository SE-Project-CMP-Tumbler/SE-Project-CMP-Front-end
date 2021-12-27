/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const hideNav = createSlice({
  name: 'hideNav',
  initialState: {
    backgroundColor: 'rgb(6, 24, 51)',
    color: '',
    font: 'Poppins',
  },
  reducers: {
    setTheme: (state, action) => {
      const s = state;
      s.backgroundColor = action.payload.backgroundColor;
      s.color = action.payload.color;
      s.font = action.payload.font;
    },
  },

});

export const selectHideNav = (state) => state.hideNav;
export const { setHideAll, setHideRightGroup, initializeState } = hideNav.actions;
export default hideNav.reducer;
