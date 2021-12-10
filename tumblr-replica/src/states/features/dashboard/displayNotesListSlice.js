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
    },
    Hide: (state) => {
      const s = state;
      s.showNoteList = false;
    },
  },
});

export const { Display, Hide } = NoteListSlice.actions;
export default NoteListSlice.reducer;
