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

var _ChatReducer = _interopRequireDefault(require("./reducers/ChatReducer"));

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

var _followslice = _interopRequireDefault(require("./followslice/followslice"));

var _blockSlice = _interopRequireDefault(require("./blockSlice/blockSlice"));

var _dashboardSlice = _interopRequireDefault(require("./features/dashboard/dashboardSlice"));

var _NotesSlice = _interopRequireDefault(require("./features/dashboard/NotesSlice"));

var _usertumblrSlice = _interopRequireDefault(require("./usertumblr/usertumblrSlice"));

var _newtumblrSlice = _interopRequireDefault(require("./newtumblr/newtumblrSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    draftposts: _draftpostsSlice["default"],
    tagposts: _tagpostsSlice["default"],
    user: _UserSlice["default"],
    displayNotesList: _displayNotesListSlice["default"],
    NoteWindow: _NotesWindowSlice["default"],
    Like: _LikeSlice["default"],
    PostNotes: _PostNotesSlice["default"],
    Chat: _ChatReducer["default"],
    Blog: _blogslice["default"],
    Follow: _followslice["default"],
    Block: _blockSlice["default"],
    DashPosts: _dashboardSlice["default"],
    Notes: _NotesSlice["default"],
    userBlogs: _usertumblrSlice["default"],
    newTumblr: _newtumblrSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;