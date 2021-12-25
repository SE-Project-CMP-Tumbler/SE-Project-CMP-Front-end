"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BlockAsynch = exports.getBlock = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDU2MGM5MTUzMjQ0NDc3NWVlYWViYzIwZTQyNjZiMmM4MWY5M2FhOWFiNDQ2ZTEwYTIxZTY5NDYwMDRmOTljOTFhMmNiNTBlZGMyMDUyZTQiLCJpYXQiOjE2NDAxMjUwMDUuNjM5ODAyLCJuYmYiOjE2NDAxMjUwMDUuNjM5ODA2LCJleHAiOjE2NzE2NjEwMDUuNjM2NjI0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.avTBVm-XObWmxPuMdCrkuNmJ_2tfa-mBDeVauZdxd8zAyf7mwjBYtiCNrkWHWry35exuTdX33nKi-_bxSucjtavYoL0xH1MCWD32sJ8QZppF7x2B1tW4TgFivA-MhjSISPZ0JjKnqpOAIH0CYQSSsEf_Hw1c7sBlcTCbjP_Zt03ps75lQfSmzl3qIWsNovlmIQj70WkwkDvdO7FF_KhUDG8NMm-eHfWM_Qf54CGSdma4ZxSf73vNotoC7NyadAKvnxR8yuT76GBk1kcF0UhA9l3cw_tEGRlCZg4zu30GcyJDoSU0Qg2Jp6a6GbLh7tjZWBKIMMAyq9FmjbTB4_9-pG_oWv75lUANyeEfWfWGi8rJ62MRbQpuikJ0O7XuqfMMwCFjM9Aja22lEtwYFZl5Al8-78uudj8ek4xO2wtlSgISpJieXp_qlpvYVnn-xuV-wmdPyjuspZAzCYYiL3UpuR3PvqOQiMdXgeJB9kZj6vBq8fKg8zP6sbOF8qVuFis7mTTdU_mCwyuONn8NLxFLK8L0CYCvyNIPxj35oRfDH_sf-OiEO155m6MWnIIx7zXWg9yhNJQBHxM3fM8GSq_XbJHyEqk5pUkVq5JkOIzkNrqRLZXwDPzPSZ2ppAqivLqqQx3kXPXmivjax2bZFTw69ZEreuXiNm8dHCoaXHuhjyA';
var AuthStr = "Bearer ".concat(USER_TOKEN);
var BlockAsynch = (0, _toolkit.createAsyncThunk)('block_blog/:blog_id', function _callee(BlogId, MyBlog) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(MyBlog);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            method: 'POST',
            url: "https://api.dev.tumbler.social/api/block/4/".concat(BlogId),
            headers: {
              Authorization: AuthStr,
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          }));

        case 4:
          response = _context.sent;
          console.log(response.data, 'hi from block');
          return _context.abrupt("return", response.data);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          throw Error(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
});
exports.BlockAsynch = BlockAsynch;
var initialState = {
  block: {
    meta: {
      status: '000',
      msg: 'Loading'
    }
  }
};
var BlockSlice = (0, _toolkit.createSlice)({
  name: 'block',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, BlockAsynch.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    return _objectSpread({}, state, {
      followtags: payload
    });
  }), _defineProperty(_extraReducers, BlockAsynch.rejected, function () {// console.log('Rejected!');
  }), _extraReducers)
});

var getBlock = function getBlock(state) {
  return state.block.block;
};

exports.getBlock = getBlock;
var BlockReducer = BlockSlice.reducer;
var _default = BlockReducer;
exports["default"] = _default;