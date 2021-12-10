import { createSlice } from '@reduxjs/toolkit';

export const LikeSlice = createSlice({
  name: 'Like',
  initialState: {
    isLiked: null,
  },
  reducers: {
    setIsLiked: (state) => {
      const s = state;
      s.isLiked = !s.isLiked;
    },
  },
});

export const { setIsLiked } = LikeSlice.actions;
export default LikeSlice.reducer;
