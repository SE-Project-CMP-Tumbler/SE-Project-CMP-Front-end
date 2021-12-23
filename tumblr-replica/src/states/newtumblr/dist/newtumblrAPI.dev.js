"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.createBlog = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _globalAxpi = require("../../apis/globalAxpi");

var _globalAPI = require("../../apis/globalAPI");

var createBlog = (0, _toolkit.createAsyncThunk)('newTumblr/createBlog', // eslint-disable-next-line camelcase
function _callee(inputData) {
  var title, username, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          title = inputData.title, username = inputData.username;

          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context.next = 15;
            break;
          }

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_globalAxpi.api.post('blog', {
            title: title,
            blog_username: username,
            password: '',
            avatar: ''
          }));

        case 5:
          response = _context.sent;
          console.log('Hooray!');
          return _context.abrupt("return", response.data);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          throw Error(_context.t0);

        case 13:
          _context.next = 16;
          break;

        case 15:
          return _context.abrupt("return", 0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]]);
});
exports.createBlog = createBlog;
var zero = 0; // nevermind this. otherwilse will have to use a default export.

exports.zero = zero;