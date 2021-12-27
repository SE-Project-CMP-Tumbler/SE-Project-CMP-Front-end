"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createBlog", {
  enumerable: true,
  get: function get() {
    return _newtumblrAPI.createBlog;
  }
});
exports["default"] = exports.initializeState = exports.setURL = exports.setTitle = exports.selectInputData = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newtumblrAPI = require("./newtumblrAPI");

var _extraReducers;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var newTumblr = (0, _toolkit.createSlice)({
  name: 'newTumblr',
  initialState: {
    title: '',
    url: '',
    blog_username: '',
    inProgress: true,
    error: null
  },
  reducers: {
    setTitle: function setTitle(state, action) {
      var s = state;
      s.title = action.payload;
    },
    setURL: function setURL(state, action) {
      var s = state;
      var url = action.payload; // url = url.replace(/ /g, '');

      s.url = url; // console.log(url);
    },
    initializeState: function initializeState(state) {
      var s = state;
      s.title = '';
      s.url = '';
      s.blog_username = '';
      s.inProgress = true;
      s.error = null;
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, _newtumblrAPI.createBlog.pending, function (state) {
    var s = state;
    s.isLoading = true;
    console.log('trying');
  }), _defineProperty(_extraReducers, _newtumblrAPI.createBlog.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    var s = state;
    s.blogs = payload.blogs;
    s.isLoading = false;
    console.log('success');
  }), _defineProperty(_extraReducers, _newtumblrAPI.createBlog.rejected, function (state, action) {
    var s = state;
    s.error = action.error.message;
    console.log('failed'); // need to later work on an error page/pop up and set loading to false.
  }), _extraReducers)
});

var selectInputData = function selectInputData(state) {
  return state.newTumblr;
};

exports.selectInputData = selectInputData;
var _newTumblr$actions = newTumblr.actions,
    setTitle = _newTumblr$actions.setTitle,
    setURL = _newTumblr$actions.setURL,
    initializeState = _newTumblr$actions.initializeState;
exports.initializeState = initializeState;
exports.setURL = setURL;
exports.setTitle = setTitle;
var _default = newTumblr.reducer;
exports["default"] = _default;