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
    hideAll: localStorage.getItem('hideAll') === null ? false : localStorage.getItem('hideAll'),
    hideRightGroup: localStorage.getItem('hideRightGroup') === null ? false : localStorage.getItem('hideRightGroup')
  },
  reducers: {
    setHideAll: function setHideAll(state, action) {
      var s = state;
      s.hideAll = action.payload;
      localStorage.setItem('hideAll', s.hideAll);
      console.log('trigger', s.hideAll);
    },
    setHideRightGroup: function setHideRightGroup(state, action) {
      var s = state;
      s.hideRightGroup = action.payload;
      localStorage.setItem('hideRightGroup', s.hideRightGroup);
    },
    initializeState: function initializeState(state) {
      var s = state;
      s.hideAll = false;
      s.hideRightGroup = false;
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