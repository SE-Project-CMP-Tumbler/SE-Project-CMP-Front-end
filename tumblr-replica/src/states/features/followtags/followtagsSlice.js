import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exploreApi from '../../../apis/exploreApi';

const fetchAsyncfollowtags = createAsyncThunk(
  'follow_tag',
  async () => {
    const response = await exploreApi.get('follow_tag');
    for (let i = 0; i < response.data.response.tags.length; i += 1) {
      // console.log(response.data.response.tags[i]);
      response.data.response.tags[i].follow = true;
    }
    return response.data;
  },
);

const DeleteAsyncfollowtags = async (TagDescription) => {
  const response = await exploreApi.get(`deletfollowtag?${TagDescription}`);
  // const response = await exploreApi.delete(`follow_tag/:${TagDescription}`);
  return response.data;
};

const AddAsyncfollowtags = async (TagDescription) => {
  const response = await exploreApi.get(`deletfollowtag?${TagDescription}`);
  // const response = await exploreApi.post(`follow_tag/:${TagDescription}`);
  return response.data;
};

// const AddAsyncfollowtags = createAsyncThunk(
//   'follow_tag/:tag_description',
//   async (TagDescription) => {
//     const response = await exploreApi.get(`deletfollowtag?${TagDescription}`);
//     // const response = await exploreApi.post(`follow_tag/:${TagDescription}`);
//     return { data: response.data, TagDescription };
//   },
// );

const initialState = {
  followtags: { response: { tags: [] }, meta: { status: '000', msg: 'Loading' } },
};

const followtagsSlice = createSlice({
  name: 'followtags',
  initialState,
  reducers: {
    unfollowtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.followtags.response.tags.length; i += 1) {
        if (newstate.followtags.response.tags[i].tag_description === action.payload) {
          newstate.followtags.response.tags[i].follow = false;
          break;
        }
      }
      DeleteAsyncfollowtags(action.payload);
      // DeleteAsyncfollowtags(action.payload).then((data) => {
      //   if (data.meta.status !== 200) {
      //     const newstate2 = state;
      //     console.log(newstate2);
      //     newstate2.followtags.response.tags[i].follow = true;
      //     console.log(data.meta.status);
      //   }
      // }).catch((err) => console.log(err));
    },
    followtag: (state, action) => {
      const newstate = state;
      let i = 0;
      for (i = 0; i < newstate.followtags.response.tags.length; i += 1) {
        if (newstate.followtags.response.tags[i].tag_description === action.payload) {
          newstate.followtags.response.tags[i].follow = true;
          break;
        }
      }
      AddAsyncfollowtags(action.payload);
    },
  },
  extraReducers: {
    [fetchAsyncfollowtags.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncfollowtags.fulfilled]: (state, { payload }) => ({ ...state, followtags: payload }),
    // console.log('Fetched Successfully');
    [fetchAsyncfollowtags.rejected]: () => {
    // console.log('Rejected!');
    },
  },
});

const getAllfollowtags = (state) => state.followtags.followtags;
export const { unfollowtag, followtag } = followtagsSlice.actions;
const followreducer = followtagsSlice.reducer;
export {
  getAllfollowtags,
  fetchAsyncfollowtags,
  DeleteAsyncfollowtags,
  AddAsyncfollowtags,
};
export default followreducer;
