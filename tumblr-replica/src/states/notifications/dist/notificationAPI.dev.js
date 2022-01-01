"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.fetchNotifications = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _globalAxpi = require("../../apis/globalAxpi");

var _globalAPI = require("../../apis/globalAPI");

/* eslint-disable no-unused-vars */
var fetchNotifications = (0, _toolkit.createAsyncThunk)('notifications/fetchNotifications', function _callee(dispatch, _ref) {
  var getState, response, _response;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getState = _ref.getState;

          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context.next = 14;
            break;
          }

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('notifications'));

        case 5:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          throw Error(_context.t0);

        case 12:
          _context.next = 24;
          break;

        case 14:
          _context.prev = 14;
          _context.next = 17;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('notifications'));

        case 17:
          _response = _context.sent;
          return _context.abrupt("return", _response.data);

        case 21:
          _context.prev = 21;
          _context.t1 = _context["catch"](14);
          throw Error(_context.t1);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9], [14, 21]]);
});
exports.fetchNotifications = fetchNotifications;
var zero = 0; // nevermind this. otherwilse will have to use a default export.

exports.zero = zero;