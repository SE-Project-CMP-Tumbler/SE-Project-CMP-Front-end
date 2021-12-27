/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const hideNav = createSlice({
  name: 'hideNav',
  initialState: {
    hideAll: false,
    hideRightGroup: false,
  },
  reducers: {
    setHideAll: (state, action) => {
      const s = state;
      s.hideAll = action.payload;
    },
    setHideRightGroup: (state, action) => {
      const s = state;
      s.hideRightGroup = action.payload;
    },

    initializeState: (state) => {
      const s = state;
      s.hideAll = false;
      s.hideRightGroup = false;
    },

  },

});

export const selectHideNav = (state) => state.hideNav;
export const { setHideAll, setHideRightGroup, initializeState } = hideNav.actions;
export default hideNav.reducer;
