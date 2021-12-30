"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.fetchNotifications = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _globalAxpi = require("../../apis/globalAxpi");

var _globalAPI = require("../../apis/globalAPI");

var fetchNotifications = (0, _toolkit.createAsyncThunk)('notifications/fetchNotifications', function _callee(dispatch, _ref) {
  var getState, response, state, USERTOKEN, AuthStr, _response;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getState = _ref.getState;

          if (!(_globalAPI.SERVICETYPE !== _globalAPI.MOCK)) {
            _context.next = 16;
            break;
          }

          _context.prev = 2;
          console.log('tryinnnnnng');
          _context.next = 6;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('notifications'));

        case 6:
          response = _context.sent;
          console.log(response.data, 'the datatatata');
          return _context.abrupt("return", response.data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          throw Error(_context.t0);

        case 14:
          _context.next = 30;
          break;

        case 16:
          _context.prev = 16;
          // wont 'work
          console.log('There we go!');
          state = getState();
          USERTOKEN = state.user.user.accessToken;
          AuthStr = "Bearer ".concat(USERTOKEN);
          _context.next = 23;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get('notifications', {
            headers: {
              Authorization: AuthStr
            }
          }));

        case 23:
          _response = _context.sent;
          return _context.abrupt("return", _response.data.response);

        case 27:
          _context.prev = 27;
          _context.t1 = _context["catch"](16);
          throw Error(_context.t1);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11], [16, 27]]);
});
exports.fetchNotifications = fetchNotifications;
var zero = 0; // nevermind this. otherwilse will have to use a default export.

exports.zero = zero;