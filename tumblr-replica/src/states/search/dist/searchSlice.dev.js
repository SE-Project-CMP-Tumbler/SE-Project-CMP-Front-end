"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetchStuff", {
  enumerable: true,
  get: function get() {
    return _searchAPI.fetchStuff;
  }
});
exports["default"] = exports.selectSearch = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _searchAPI = require("./searchAPI");

var _extraReducers;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var searchStuff = (0, _toolkit.createSlice)({
  name: 'searchStuff',
  initialState: {
    searchResponse: {},
    blogs: [],
    posts: [],
    tags: [],
    isLoading: true,
    error: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, _searchAPI.fetchStuff.pending, function (state) {
    var s = state;
    s.isLoading = true;
  }), _defineProperty(_extraReducers, _searchAPI.fetchStuff.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    var s = state;
    s.searchResponse = payload;
    s.blogs = payload.response.blogs.blogs;
    s.posts = payload.response.posts.posts;
    s.tags = payload.response.tags.tags;
    s.isLoading = false;
  }), _defineProperty(_extraReducers, _searchAPI.fetchStuff.rejected, function (state, action) {
    var s = state;
    s.error = action.error.message; // need to later work on an error page/pop up and set loading to false.
  }), _extraReducers)
});

var selectSearch = function selectSearch(state) {
  return state.searchStuff;
};

exports.selectSearch = selectSearch;
var _default = searchStuff.reducer;
exports["default"] = _default;