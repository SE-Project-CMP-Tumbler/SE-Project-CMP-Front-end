import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice';
import followtagsReducer from './features/followtags/followtagsSlice';
import randomtagReducer from './features/randomtag/randomtagSlice';
import tagReducer from './features/tag/tagSlice';
import randompostsReducer from './features/randomposts/randompostsSlice';
import trendingpostsReducer from './features/trendingposts/trendingpostsSlice';
import trendtagReducer from './features/trendtag/trendtagSlice';
import displayNotesListReducer from './features/dashboard/displayNotesListSlice';
import NoteWindowReducer from './features/dashboard/NotesWindowSlice';
import LikeReducer from './features/dashboard/LikeSlice';
import PostNoteReducer from './features/dashboard/PostNotesSlice';
import Chatreduser from '../slices/chatmodule/chatmoduleSlice';
import textpostsReducer from './features/textposts/textpostsSlice';
import videopostsReducer from './features/videoposts/videopostsSlice';
import imagepostsReducer from './features/imageposts/imagepostsSlice';
import chatpostsReducer from './features/chatposts/chatpostsSlice';
import quotepostsReducer from './features/quoteposts/quotepostsSlice';
import gifpostsReducer from './features/gifposts/gifpostsSlice';
import askpostsReducer from './features/askposts/askpostsSlice';
import audiopostsReducer from './features/audioposts/audiopostsSlice';
import tagpostsReducer from './features/tagposts/tagpostsSlice';
import blogpostsReducer from './features/blogposts/blogpostsSlice';
import draftpostsReducer from './features/draftposts/draftpostsSlice';
import BlogReducer from './blogslice/blogslice';
import BlogsReducer from './blogslice/blogsslice';
import FollowReducer from './followslice/followslice';
import BlockReducer from './blockSlice/blockslice';
import DashReducer from './features/dashboard/dashboardSlice';
import NotesReducer from './features/dashboard/NotesSlice';
import checkoutReducer from './features/checkout/checkoutSlice';
import radarReducer from './features/radar/radarSlice';
import usertumblrsReducer from './usertumblr/usertumblrSlice';
import newtumblrReducer from './newtumblr/newtumblrSlice';
// eslint-disable-next-line import/no-unresolved
import Followreduser from '../slices/followingpage/followingpageSlice';
// eslint-disable-next-line import/no-unresolved
import Followerreducer from '../slices/followerspage/followerspageSlice';
import postviewreducer from './features/postview/postviewSlice';
import blogactivityreducer from './features/blogactivity/blogacttivitySlice';
import bloginforeducer from './features/bloginfo/bloginfoSlice';
import graphReducer from './features/graph/graphSlice';
import unFollowReducer from './followslice/unfollowSlice';
import FollowedReducer from './followslice/getfollowslice';
import BlockedReducer from './blockSlice/getblockslice';
import unBlockReducer from './blockSlice/unblockslice';
import AskReducer from './askpostslice/askpostslice';
import userblogsReducer from './features/userblogs/userblogsSlice';
import PostslikedReducer from './likedposts/likedpostsSlice';
import MyPostsReducer from './mypostsslice/mypostsSlice';
import deleteBlogMessagesReducer from './deleteblogmessagesslice/deleteblogmessagesslice';
import deleteAllMessagesReducer from './deleteallmessagesslice/deleteallmessagesslice';
import BlogMessagesReducer from './retriveblogmessagesslice/retriveblogmessagesslice';
import AllMessagesReducer from './retriveallmessagesslice/retriveallmessagesslice';
import hideNavReducer from './hidenav/hidenavSlice';
import blogSettingsReducer from './blogsettingsslice/blogsettingsSlice';
import deleteAskReducer from './deleteaskslice/deleteAskSlice';
import deleteSubmitReducer from './deletesubmissionslice/deleteSubmissionSlice';
import PostSubmitReducer from './submissionslice/approveSubmissionSlice';
import AnswerReducer from './answerslice/answerSlice';
import BlogIdReducer from './blognameslice/blogNameSlice';
import themeReducer from './theme/themeSlice';
import notificationsReducer from './notifications/notificationSlice';
import searchStuffReducder from './search/searchSlice';
import searchAutocompleteReducer from './search/autocompleteSlice';
import blogThemeReducer from './blogthemeslice/blogthemeSlice';
import SumbitReducer from './submit/submitAPI';
import CreatePostReducer from './features/createpost/createpostSlice';

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
    gifposts: gifpostsReducer,
    askposts: askpostsReducer,
    audioposts: audiopostsReducer,
    quoteposts: quotepostsReducer,
    blogposts: blogpostsReducer,
    blogactivity: blogactivityreducer,
    postview: postviewreducer,
    draftposts: draftpostsReducer,
    tagposts: tagpostsReducer,
    bloginfo: bloginforeducer,
    user: userReducer,
    displayNotesList: displayNotesListReducer,
    NoteWindow: NoteWindowReducer,
    Like: LikeReducer,
    PostNotes: PostNoteReducer,
    Chat: Chatreduser,
    blog: BlogReducer,
    blogs: BlogsReducer,
    follow: FollowReducer,
    block: BlockReducer,
    followed: FollowedReducer,
    blocked: BlockedReducer,
    unfollow: unFollowReducer,
    unblock: unBlockReducer,
    DashPosts: DashReducer,
    Notes: NotesReducer,
    checkout: checkoutReducer,
    radar: radarReducer,
    userBlogs: usertumblrsReducer,
    newTumblr: newtumblrReducer,
    Following: Followreduser,
    Follower: Followerreducer,
    graph: graphReducer,
    ask: AskReducer,
    userblogs: userblogsReducer,
    postsliked: PostslikedReducer,
    myposts: MyPostsReducer,
    deleteblogmsg: deleteBlogMessagesReducer,
    deleteallmsg: deleteAllMessagesReducer,
    blogmessages: BlogMessagesReducer,
    deleteask: deleteAskReducer,
    deletesubmit: deleteSubmitReducer,
    allmessages: AllMessagesReducer,
    hideNav: hideNavReducer,
    postSubmit: PostSubmitReducer,
    postanswer: AnswerReducer,
    blogId: BlogIdReducer,
    currentTheme: themeReducer,
    notifications: notificationsReducer,
    searchStuff: searchStuffReducder,
    searchAutocomplete: searchAutocompleteReducer,
    postsubmit: SumbitReducer,
    blogSettings: blogSettingsReducer,
    blogTheme: blogThemeReducer,
    CreatePostState: CreatePostReducer,
  },
});

export default store;
