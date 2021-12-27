import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  small: false,
};

const postviewSlice = createSlice({
  name: 'small',
  initialState,
  reducers: {
    tosmall: (state) => {
      const newstate = state;
      newstate.small = true;
    },
    tolarge: (state) => {
      const newstate = state;
      newstate.small = false;
    },
  },
});

const getpostview = (state) => state.postview.small;
export const { tosmall, tolarge } = postviewSlice.actions;
const postviewreducer = postviewSlice.reducer;
export {
  getpostview,
};
export default postviewreducer;
