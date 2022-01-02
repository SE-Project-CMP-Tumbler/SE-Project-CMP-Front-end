"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.createBlog = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _globalAPI = require("../../apis/globalAPI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { apiR } from '../../apis/globalAxpi';
var createBlog = (0, _toolkit.createAsyncThunk)('newTumblr/createBlog', // eslint-disable-next-line camelcase
function _callee(dispatch, _ref) {
  var getState, state, USERTOKEN, AuthStr, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getState = _ref.getState;

          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context.next = 12;
            break;
          }

          _context.prev = 2;
          console.log('Mock not fully supported for POST requests!');
          return _context.abrupt("return", 0);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](2);
          throw Error(_context.t0);

        case 10:
          _context.next = 30;
          break;

        case 12:
          console.log(dispatch, 'Im innn'); // works correctly.

          console.log(dispatch.url, 'Were all innn'); // works correctly

          _context.prev = 14;
          state = getState();
          USERTOKEN = state.user.user.accessToken;
          console.log(USERTOKEN, 'code here!'); // works correctly

          AuthStr = "Bearer ".concat('USERTOKEN');
          _context.next = 21;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            method: 'POST',
            url: 'https://api.tumbler.social/api/blog',
            headers: {
              Authorization: AuthStr,
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
              title: dispatch.title,
              blog_username: dispatch.url,
              password: 'abc123'
            }
          }));

        case 21:
          response = _context.sent;
          console.log(response, 'well met');
          return _context.abrupt("return", response.data);

        case 26:
          _context.prev = 26;
          _context.t1 = _context["catch"](14);
          console.log(_context.t1);
          throw Error(_context.t1);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 7], [14, 26]]);
});
exports.createBlog = createBlog;
var zero = 0; // nevermind this. otherwilse will have to use a default export.

exports.zero = zero;