import { createSlice } from '@reduxjs/toolkit';
import fetchRadar from './radarAPI';

const radar = createSlice({
  name: 'radar',
  initialState: {
    post: null,
  },
  reducers: {
  },
  extraReducers: {
    [fetchRadar.pending]: () => {
    },
    [fetchRadar.fulfilled]: (state, { payload }) => {
      const s = state;
      s.post = payload.post;
    },
    [fetchRadar.rejected]: () => {
    },
  },
});
export const getRadar = (state) => state.radar.post;
export default radar.reducer;
