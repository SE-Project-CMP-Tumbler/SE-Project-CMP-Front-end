import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
import followtagsReducer from './features/followtags/followtagsSlice';
import randomtagReducer from './features/randomtag/randomtagSlice';
import tagReducer from './features/tag/tagSlice';
import randompostsReducer from './features/randomposts/randompostsSlice';
import trendingpostsReducer from './features/trendingposts/trendingpostsSlice';
import trendtagReducer from './features/trendtag/trendtagSlice';
import displayNotesListReducer from './displayNotesList';
import NoteWindowReducer from './NotesWindow';
import LikeReducer from './Like';
import PostNoteReducer from './PostNotes';
import Chatreduser from './reducers/ChatReducer';
import textpostsReducer from './features/textposts/textpostsSlice';
import videopostsReducer from './features/videoposts/videopostsSlice';
import imagepostsReducer from './features/imageposts/imagepostsSlice';
import chatpostsReducer from './features/chatposts/chatpostsSlice';
import quotepostsReducer from './features/quoteposts/quotepostsSlice';

const store = configureStore({
  reducer: {
    followtags: followtagsReducer,
    trendtag: trendtagReducer,
    randomtag: randomtagReducer,
    randomposts: randompostsReducer,
    trendingposts: trendingpostsReducer,
    tag: tagReducer,
    textposts: textpostsReducer,
    videoposts: videopostsReducer,
    imageposts: imagepostsReducer,
    chatposts: chatpostsReducer,
    quoteposts: quotepostsReducer,
    user: userReducer,
    displayNotesList: displayNotesListReducer,
    NoteWindow: NoteWindowReducer,
    Like: LikeReducer,
    PostNotes: PostNoteReducer,
    Chat: Chatreduser,

  },
});

export default store;
