"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.fetchAutocomplete = exports.fetchStuff = void 0;

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
            _context.next = 14;
            break;
          }

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('search'));

        case 4:
          response = _context.sent;
          console.log(response.data);
          return _context.abrupt("return", response.data);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          throw Error(_context.t0);

        case 12:
          _context.next = 24;
          break;

        case 14:
          _context.prev = 14;
          _context.next = 17;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get('search/' + word));

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
  }, null, null, [[1, 9], [14, 21]]);
});
exports.fetchStuff = fetchStuff;
var fetchAutocomplete = (0, _toolkit.createAsyncThunk)('searchAutocomplete/fetchAutocomplete', function _callee2(input) {
  var response, word, _response2;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context2.next = 13;
            break;
          }

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('search_auto_complete'));

        case 4:
          response = _context2.sent;
          return _context2.abrupt("return", response.data.response);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          throw Error(_context2.t0);

        case 11:
          _context2.next = 24;
          break;

        case 13:
          _context2.prev = 13;
          word = {
            input: input
          }; // console.log('search_auto_complete/' + word.input.string);

          _context2.next = 17;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get('search_auto_complete/' + word.input.string));

        case 17:
          _response2 = _context2.sent;
          return _context2.abrupt("return", _response2.data.response);

        case 21:
          _context2.prev = 21;
          _context2.t1 = _context2["catch"](13);
          throw Error(_context2.t1);

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8], [13, 21]]);
});
exports.fetchAutocomplete = fetchAutocomplete;
var zero = 0; // nevermind this. otherwilse will have to use a default export.

exports.zero = zero;