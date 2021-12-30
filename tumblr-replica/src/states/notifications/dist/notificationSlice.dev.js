"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetchNotifications", {
  enumerable: true,
  get: function get() {
    return _notificationAPI.fetchNotifications;
  }
});
exports["default"] = exports.selectNotifications = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _notificationAPI = require("./notificationAPI");

var _extraReducers;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blogNotifications = (0, _toolkit.createSlice)({
  name: 'notifications',
  initialState: {
    notifications: [],
    isLoading: true,
    error: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, _notificationAPI.fetchNotifications.pending, function (state) {
    var s = state;
    s.isLoading = true;
  }), _defineProperty(_extraReducers, _notificationAPI.fetchNotifications.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    var s = state;
    s.notifications = payload;
    s.isLoading = false;
  }), _defineProperty(_extraReducers, _notificationAPI.fetchNotifications.rejected, function (state, action) {
    var s = state;
    s.error = action.error.message; // need to later work on an error page/pop up and set loading to false.
  }), _extraReducers)
});

var selectNotifications = function selectNotifications(state) {
  return state.notifications;
};

exports.selectNotifications = selectNotifications;
var _default = blogNotifications.reducer;
exports["default"] = _default;