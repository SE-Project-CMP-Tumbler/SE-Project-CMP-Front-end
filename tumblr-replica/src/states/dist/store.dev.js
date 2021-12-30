"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _UserSlice = _interopRequireDefault(require("./User/UserSlice"));

var _followtagsSlice = _interopRequireDefault(require("./features/followtags/followtagsSlice"));

var _randomtagSlice = _interopRequireDefault(require("./features/randomtag/randomtagSlice"));

var _tagSlice = _interopRequireDefault(require("./features/tag/tagSlice"));

var _randompostsSlice = _interopRequireDefault(require("./features/randomposts/randompostsSlice"));

var _trendingpostsSlice = _interopRequireDefault(require("./features/trendingposts/trendingpostsSlice"));

var _trendtagSlice = _interopRequireDefault(require("./features/trendtag/trendtagSlice"));

var _displayNotesListSlice = _interopRequireDefault(require("./features/dashboard/displayNotesListSlice"));

var _NotesWindowSlice = _interopRequireDefault(require("./features/dashboard/NotesWindowSlice"));

var _LikeSlice = _interopRequireDefault(require("./features/dashboard/LikeSlice"));

var _PostNotesSlice = _interopRequireDefault(require("./features/dashboard/PostNotesSlice"));

var _chatmoduleSlice = _interopRequireDefault(require("../slices/chatmodule/chatmoduleSlice"));

var _textpostsSlice = _interopRequireDefault(require("./features/textposts/textpostsSlice"));

var _videopostsSlice = _interopRequireDefault(require("./features/videoposts/videopostsSlice"));

var _imagepostsSlice = _interopRequireDefault(require("./features/imageposts/imagepostsSlice"));

var _chatpostsSlice = _interopRequireDefault(require("./features/chatposts/chatpostsSlice"));

var _quotepostsSlice = _interopRequireDefault(require("./features/quoteposts/quotepostsSlice"));

var _gifpostsSlice = _interopRequireDefault(require("./features/gifposts/gifpostsSlice"));

var _askpostsSlice = _interopRequireDefault(require("./features/askposts/askpostsSlice"));

var _audiopostsSlice = _interopRequireDefault(require("./features/audioposts/audiopostsSlice"));

var _tagpostsSlice = _interopRequireDefault(require("./features/tagposts/tagpostsSlice"));

var _blogpostsSlice = _interopRequireDefault(require("./features/blogposts/blogpostsSlice"));

var _draftpostsSlice = _interopRequireDefault(require("./features/draftposts/draftpostsSlice"));

var _blogslice = _interopRequireDefault(require("./blogslice/blogslice"));

var _blogsslice = _interopRequireDefault(require("./blogslice/blogsslice"));

var _followslice = _interopRequireDefault(require("./followslice/followslice"));

var _blockslice = _interopRequireDefault(require("./blockSlice/blockslice"));

var _dashboardSlice = _interopRequireDefault(require("./features/dashboard/dashboardSlice"));

var _NotesSlice = _interopRequireDefault(require("./features/dashboard/NotesSlice"));

var _checkoutSlice = _interopRequireDefault(require("./features/checkout/checkoutSlice"));

var _radarSlice = _interopRequireDefault(require("./features/radar/radarSlice"));

var _usertumblrSlice = _interopRequireDefault(require("./usertumblr/usertumblrSlice"));

var _newtumblrSlice = _interopRequireDefault(require("./newtumblr/newtumblrSlice"));

var _followingpageSlice = _interopRequireDefault(require("../slices/followingpage/followingpageSlice"));

var _followerspageSlice = _interopRequireDefault(require("../slices/followerspage/followerspageSlice"));

var _postviewSlice = _interopRequireDefault(require("./features/postview/postviewSlice"));

var _blogacttivitySlice = _interopRequireDefault(require("./features/blogactivity/blogacttivitySlice"));

var _bloginfoSlice = _interopRequireDefault(require("./features/bloginfo/bloginfoSlice"));

var _graphSlice = _interopRequireDefault(require("./features/graph/graphSlice"));

var _unfollowSlice = _interopRequireDefault(require("./followslice/unfollowSlice"));

var _getfollowslice = _interopRequireDefault(require("./followslice/getfollowslice"));

var _getblockslice = _interopRequireDefault(require("./blockSlice/getblockslice"));

var _unblockslice = _interopRequireDefault(require("./blockSlice/unblockslice"));

var _askpostslice = _interopRequireDefault(require("./askpostslice/askpostslice"));

var _userblogsSlice = _interopRequireDefault(require("./features/userblogs/userblogsSlice"));

var _likedpostsSlice = _interopRequireDefault(require("./likedposts/likedpostsSlice"));

var _hidenavSlice = _interopRequireDefault(require("./hidenav/hidenavSlice"));

var _themeSlice = _interopRequireDefault(require("./theme/themeSlice"));

var _notificationSlice = _interopRequireDefault(require("./notifications/notificationSlice"));

var _searchSlice = _interopRequireDefault(require("./search/searchSlice"));

var _autocompleteSlice = _interopRequireDefault(require("./search/autocompleteSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
var store = (0, _toolkit.configureStore)({
  reducer: {
    followtags: _followtagsSlice["default"],
    trendtag: _trendtagSlice["default"],
    randomtag: _randomtagSlice["default"],
    randomposts: _randompostsSlice["default"],
    trendingposts: _trendingpostsSlice["default"],
    tag: _tagSlice["default"],
    textposts: _textpostsSlice["default"],
    videoposts: _videopostsSlice["default"],
    imageposts: _imagepostsSlice["default"],
    chatposts: _chatpostsSlice["default"],
    gifposts: _gifpostsSlice["default"],
    askposts: _askpostsSlice["default"],
    audioposts: _audiopostsSlice["default"],
    quoteposts: _quotepostsSlice["default"],
    blogposts: _blogpostsSlice["default"],
    blogactivity: _blogacttivitySlice["default"],
    postview: _postviewSlice["default"],
    draftposts: _draftpostsSlice["default"],
    tagposts: _tagpostsSlice["default"],
    bloginfo: _bloginfoSlice["default"],
    user: _UserSlice["default"],
    displayNotesList: _displayNotesListSlice["default"],
    NoteWindow: _NotesWindowSlice["default"],
    Like: _LikeSlice["default"],
    PostNotes: _PostNotesSlice["default"],
    Chat: _chatmoduleSlice["default"],
    blog: _blogslice["default"],
    blogs: _blogsslice["default"],
    follow: _followslice["default"],
    block: _blockslice["default"],
    followed: _getfollowslice["default"],
    blocked: _getblockslice["default"],
    unfollow: _unfollowSlice["default"],
    unblock: _unblockslice["default"],
    DashPosts: _dashboardSlice["default"],
    Notes: _NotesSlice["default"],
    checkout: _checkoutSlice["default"],
    radar: _radarSlice["default"],
    userBlogs: _usertumblrSlice["default"],
    newTumblr: _newtumblrSlice["default"],
    Following: _followingpageSlice["default"],
    Follower: _followerspageSlice["default"],
    graph: _graphSlice["default"],
    ask: _askpostslice["default"],
    userblogs: _userblogsSlice["default"],
    postsliked: _likedpostsSlice["default"],
    hideNav: _hidenavSlice["default"],
    currentTheme: _themeSlice["default"],
    notifications: _notificationSlice["default"],
    searchStuff: _searchSlice["default"],
    searchAutocomplete: _autocompleteSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;