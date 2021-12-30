"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.fetchStuff = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _globalAxpi = require("../../apis/globalAxpi");

var _globalAPI = require("../../apis/globalAPI");

var fetchStuff = (0, _toolkit.createAsyncThunk)('searchStuff/fetchStuff', function _callee(word) {
  var response, _response;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context.next = 13;
            break;
          }

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('blog'));

        case 4:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          throw Error(_context.t0);

        case 11:
          _context.next = 24;
          break;

        case 13:
          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get('search/' + word));

        case 16:
          _response = _context.sent;
          console.log(_response.data, 'Works From Search');
          return _context.abrupt("return", _response.data);

        case 21:
          _context.prev = 21;
          _context.t1 = _context["catch"](13);
          throw Error(_context.t1);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8], [13, 21]]);
});
exports.fetchStuff = fetchStuff;
var zero = 0; // nevermind this. otherwilse will have to use a default export.

exports.zero = zero;