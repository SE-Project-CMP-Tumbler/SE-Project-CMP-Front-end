/* eslint-disable no-else-return */
import { createSlice } from '@reduxjs/toolkit';
import { fetchAutocomplete } from './searchAPI';

const searchAutocomplete = createSlice({
  name: 'searchAutocomplete',
  initialState: {
    words: [],
    isLoading: true,
    error: null,
  },
  reducers: {

  },

  extraReducers: {
    [fetchAutocomplete.pending]: (state) => {
      const s = state;
      s.isLoading = true;
    },
    [fetchAutocomplete.fulfilled]: (state, { payload }) => {
      const s = state;
      // eslint-disable-next-line prefer-const
      let wordz = [];
      payload.words.forEach((w) => { wordz.push({ name: w.word.split(' ').slice(0, 2).join(' ') }); });
      s.words = wordz;
      s.isLoading = false;
    },
    [fetchAutocomplete.rejected]: (state, action) => {
      const s = state;
      s.error = action.error.message;
      // need to later work on an error page/pop up and set loading to false.
    },
  },
});

export const selectAutocomplete = (state) => state.searchAutocomplete;
export { fetchAutocomplete };
export default searchAutocomplete.reducer;
