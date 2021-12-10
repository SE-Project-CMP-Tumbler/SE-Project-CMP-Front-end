import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice';
import followtagsReducer from './features/followtags/followtagsSlice';
import randomtagReducer from './features/randomtag/randomtagSlice';
import tagReducer from './features/tag/tagSlice';
import trendtagReducer from './features/trendtag/trendtagSlice';
import displayNotesListReducer from './displayNotesList';
import NoteWindowReducer from './NotesWindow';
import LikeReducer from './Like';
import PostNoteReducer from './PostNotes';
import Chatreduser from '../slices/ChatModule/ChatModule';
import Followreduser from '../slices/FollowingPage/FollowingPage';

const store = configureStore({
  reducer: {
    followtags: followtagsReducer,
    trendtag: trendtagReducer,
    randomtag: randomtagReducer,
    tag: tagReducer,
    user: userReducer,
    displayNotesList: displayNotesListReducer,
    NoteWindow: NoteWindowReducer,
    Like: LikeReducer,
    PostNotes: PostNoteReducer,
    Chat: Chatreduser,
    Follow: Followreduser,
  },
});

export default store;
