"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _UserSlice = _interopRequireDefault(require("./user/UserSlice"));

var _followtagsSlice = _interopRequireDefault(require("./features/followtags/followtagsSlice"));

var _randomtagSlice = _interopRequireDefault(require("./features/randomtag/randomtagSlice"));

var _tagSlice = _interopRequireDefault(require("./features/tag/tagSlice"));

var _trendtagSlice = _interopRequireDefault(require("./features/trendtag/trendtagSlice"));

var _displayNotesList = _interopRequireDefault(require("./displayNotesList"));

var _NotesWindow = _interopRequireDefault(require("./NotesWindow"));

var _Like = _interopRequireDefault(require("./Like"));

var _PostNotes = _interopRequireDefault(require("./PostNotes"));

var _ChatReducer = _interopRequireDefault(require("./reducers/ChatReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    followtags: _followtagsSlice["default"],
    trendtag: _trendtagSlice["default"],
    randomtag: _randomtagSlice["default"],
    tag: _tagSlice["default"],
    user: _UserSlice["default"],
    displayNotesList: _displayNotesList["default"],
    NoteWindow: _NotesWindow["default"],
    Like: _Like["default"],
    PostNotes: _PostNotes["default"],
    Chat: _ChatReducer["default"]
  }
});
var _default = store;
exports["default"] = _default;