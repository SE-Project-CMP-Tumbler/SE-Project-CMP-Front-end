"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetchAutocomplete", {
  enumerable: true,
  get: function get() {
    return _searchAPI.fetchAutocomplete;
  }
});
exports["default"] = exports.selectAutocomplete = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _searchAPI = require("./searchAPI");

var _extraReducers;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var searchAutocomplete = (0, _toolkit.createSlice)({
  name: 'searchAutocomplete',
  initialState: {
    words: [],
    isLoading: true,
    error: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, _searchAPI.fetchAutocomplete.pending, function (state) {
    var s = state;
    s.isLoading = true;
  }), _defineProperty(_extraReducers, _searchAPI.fetchAutocomplete.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    var s = state; // eslint-disable-next-line prefer-const

    var wordz = [];
    payload.words.forEach(function (w) {
      wordz.push({
        name: w.word.split(' ').slice(0, 2).join(' ')
      });
    });
    s.words = wordz;
    s.isLoading = false;
  }), _defineProperty(_extraReducers, _searchAPI.fetchAutocomplete.rejected, function (state, action) {
    var s = state;
    s.error = action.error.message; // need to later work on an error page/pop up and set loading to false.
  }), _extraReducers)
});

var selectAutocomplete = function selectAutocomplete(state) {
  return state.searchAutocomplete;
};

exports.selectAutocomplete = selectAutocomplete;
var _default = searchAutocomplete.reducer;
exports["default"] = _default;