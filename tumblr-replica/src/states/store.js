import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
import followtagsReducer from './features/followtags/followtagsSlice';
import randomtagReducer from './features/randomtag/randomtagSlice';
import tagReducer from './features/tag/tagSlice';
import trendtagReducer from './features/trendtag/trendtagSlice';
import displayNotesListReducer from './displayNotesList';
import NoteWindowReducer from './NotesWindow';
import LikeReducer from './Like';
import PostNoteReducer from './PostNotes';
import Chatreduser from './reducers/ChatReducer';

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

  },
});

export default store;
