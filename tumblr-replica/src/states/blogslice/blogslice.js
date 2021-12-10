// createEntotyAdabtor let me update without need to write the logic of the reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
  loading: false,
  error: null,
  user: {},
};

const fetchBlog = createAsyncThunk(
  'blog/getblog',
  async () => {
    try {
      const response = await fetch('http://localhost:8000/response');
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(error);
    }
  },
);

const blogSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    // is for adding actions like follow etc...
    follow(state) {
      // console.log('follow is called');
      const st = state;
      st.user.follow = true;
    },
    unFollow(state) {
      // console.log('unfollow is called');
      const st = state;
      st.user.follow = false;
    },
    block(state) {
      const st = state;
      st.user.block = true;
    },
    unblock(state) {
      const st = state;
      st.user.block = false;
    },

  },
  extraReducers: {
    [fetchBlog.pending]: (state) => {
      const st = state;
      st.loading = true;
      st.error = null;
    },
    [fetchBlog.fulfilled]: (state, action) => {
      const st = state;
      st.user = action.payload;
      st.loading = false;
    },
    [fetchBlog.rejected]: (state, action) => {
      const st = state;
      st.error = action.error.message;
      console.error(action.error.message);
      st.loading = false;
    },
  },
});

// export const { } = blogSlice.actions;
// export const create = () => async (getState) => {
//   const currentState = getState().blogSlice;
//   // console.log(currentState);
//   return (currentState);
// };
const getBlog = (state) => state.Blog.user;
const BlogReducer = blogSlice.reducer;
export const {
  follow, unFollow, block, unblock,
} = blogSlice.actions;
export {
  getBlog,
  fetchBlog,
};
export default BlogReducer;