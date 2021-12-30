"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setTheme = exports.selectTheme = void 0;

var _toolkit = require("@reduxjs/toolkit");

/* eslint-disable no-else-return */
var currentTheme = (0, _toolkit.createSlice)({
  name: 'currentTheme',
  initialState: {
    // There are seven possible themes including the default (which is the 6th)
    theme: localStorage.getItem('theme') ? parseInt(localStorage.getItem('theme'), 10) : 6
  },
  reducers: {
    setTheme: function setTheme(state, action) {
      var s = state;
      s.theme = action.payload;
      localStorage.setItem('theme', s.theme);
    }
  }
});

var selectTheme = function selectTheme(state) {
  return state.currentTheme;
};

exports.selectTheme = selectTheme;
var setTheme = currentTheme.actions.setTheme;
exports.setTheme = setTheme;
var _default = currentTheme.reducer;
exports["default"] = _default;