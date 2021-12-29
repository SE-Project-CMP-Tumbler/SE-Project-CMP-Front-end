/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';

const hideNav = createSlice({
  name: 'hideNav',
  initialState: {
    hideAll: (localStorage.getItem('hideAll') === null) ? false : localStorage.getItem('hideAll'),
    hideRightGroup: (localStorage.getItem('hideRightGroup') === null) ? false : localStorage.getItem('hideRightGroup'),
  },
  reducers: {
    setHideAll: (state, action) => {
      const s = state;
      s.hideAll = action.payload;
      localStorage.setItem('hideAll', s.hideAll);
      console.log('trigger', s.hideAll);
    },
    setHideRightGroup: (state, action) => {
      const s = state;
      s.hideRightGroup = action.payload;
      localStorage.setItem('hideRightGroup', s.hideRightGroup);
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
