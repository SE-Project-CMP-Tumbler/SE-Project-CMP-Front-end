"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initializeState = exports.setHideRightGroup = exports.setHideAll = exports.selectHideNav = void 0;

var _toolkit = require("@reduxjs/toolkit");

/* eslint-disable no-else-return */
var hideNav = (0, _toolkit.createSlice)({
  name: 'hideNav',
  initialState: {
    backgroundColor: 'rgb(6, 24, 51)',
    color: '',
    font: 'Poppins'
  },
  reducers: {
    setTheme: function setTheme(state, action) {
      var s = state;
      s.backgroundColor = action.payload.backgroundColor;
      s.color = action.payload.color;
      s.font = action.payload.font;
    }
  }
});

var selectHideNav = function selectHideNav(state) {
  return state.hideNav;
};

exports.selectHideNav = selectHideNav;
var _hideNav$actions = hideNav.actions,
    setHideAll = _hideNav$actions.setHideAll,
    setHideRightGroup = _hideNav$actions.setHideRightGroup,
    initializeState = _hideNav$actions.initializeState;
exports.initializeState = initializeState;
exports.setHideRightGroup = setHideRightGroup;
exports.setHideAll = setHideAll;
var _default = hideNav.reducer;
exports["default"] = _default;