import { createSlice } from '@reduxjs/toolkit';

export const NoteWindowSlice = createSlice({
  name: 'NotesWindow',
  initialState: {
    showen: null,
  },
  reducers: {
    DisplayNote: (state, action) => {
      const s = state;
      s.showen = action.payload;
    },
    HideNote: (state) => {
      const s2 = state;
      s2.showen = null;
    },
  },
});

export const { DisplayNote, HideNote } = NoteWindowSlice.actions;
export default NoteWindowSlice.reducer;
