"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetchBlogs", {
  enumerable: true,
  get: function get() {
    return _usertumblrAPI.fetchBlogs;
  }
});
exports["default"] = exports.selectBlogs = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _usertumblrAPI = require("./usertumblrAPI");

var _extraReducers;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userBlogs = (0, _toolkit.createSlice)({
  name: 'userBlogs',
  initialState: {
    blogs: [],
    isLoading: true,
    error: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, _usertumblrAPI.fetchBlogs.pending, function (state) {
    var s = state;
    s.isLoading = true;
  }), _defineProperty(_extraReducers, _usertumblrAPI.fetchBlogs.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    var s = state;
    s.blogs = payload.blogs;
    s.isLoading = false;
  }), _defineProperty(_extraReducers, _usertumblrAPI.fetchBlogs.rejected, function (state, action) {
    var s = state;
    s.error = action.error.message; // need to later work on an error page/pop up and set loading to false.
  }), _extraReducers)
});

var selectBlogs = function selectBlogs(state) {
  return state.userBlogs;
};

exports.selectBlogs = selectBlogs;
var _default = userBlogs.reducer;
exports["default"] = _default;