import { createSlice } from '@reduxjs/toolkit';

export const NoteListSlice = createSlice({
  name: 'displayNotesList',
  initialState: {
    showNoteList: false,
  },
  reducers: {
    Display: (state) => {
      const s = state;
      s.showNoteList = true;
      console.log('hello from display');
    },
    Hide: (state) => {
      const s = state;
      s.showNoteList = false;
      // if(state.showNoteList)
      console.log('hello from Hide ');
    },
  },
});

export const { Display, Hide } = NoteListSlice.actions;
export default NoteListSlice.reducer;
