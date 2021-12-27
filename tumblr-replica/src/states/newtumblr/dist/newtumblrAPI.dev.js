"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.createBlog = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _globalAxpi = require("../../apis/globalAxpi");

var _globalAPI = require("../../apis/globalAPI");

var createBlog = (0, _toolkit.createAsyncThunk)('newTumblr/createBlog', // eslint-disable-next-line camelcase
function _callee(arg, thunkAPI) {
  var title, url, state, USERTOKEN, AuthStr, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          title = arg.title, url = arg.url;
          console.log('Im wenn', arg);

          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context.next = 13;
            break;
          }

          _context.prev = 3;
          console.log('Mock not fully supported for POST requests!');
          return _context.abrupt("return", 0);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](3);
          throw Error(_context.t0);

        case 11:
          _context.next = 31;
          break;

        case 13:
          console.log(title, 'Im innn'); // works correctly.

          console.log(url, 'Were all innn'); // works correctly

          _context.prev = 15;
          state = thunkAPI.getState();
          USERTOKEN = state.user.user.accessToken;
          console.log(USERTOKEN, 'code here!'); // works correctly

          AuthStr = "Bearer ".concat('USERTOKEN');
          _context.next = 22;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.post('blog', {
            title: title,
            blog_username: url,
            password: ''
          }, {
            headers: {
              Authorization: AuthStr
            }
          }));

        case 22:
          response = _context.sent;
          console.log(response, 'well met');
          return _context.abrupt("return", response.data);

        case 27:
          _context.prev = 27;
          _context.t1 = _context["catch"](15);
          console.log(_context.t1);
          throw Error(_context.t1);

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 8], [15, 27]]);
});
exports.createBlog = createBlog;
var zero = 0; // nevermind this. otherwilse will have to use a default export.

exports.zero = zero;