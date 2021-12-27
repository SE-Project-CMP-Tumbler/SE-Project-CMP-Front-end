"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FollowedByAsynch = exports.getFollowed = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _globalAxpi = require("../../apis/globalAxpi");

var _extraReducers;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const FollowedByAsynch = createAsyncThunk(
//   'followed_by/:blog_id',
//   async (BlogId) => {
//     const response = await FollowApi.get(`followed_by/:${BlogId}`);
//     return response.data;
//   },
// );
var USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDU2MGM5MTUzMjQ0NDc3NWVlYWViYzIwZTQyNjZiMmM4MWY5M2FhOWFiNDQ2ZTEwYTIxZTY5NDYwMDRmOTljOTFhMmNiNTBlZGMyMDUyZTQiLCJpYXQiOjE2NDAxMjUwMDUuNjM5ODAyLCJuYmYiOjE2NDAxMjUwMDUuNjM5ODA2LCJleHAiOjE2NzE2NjEwMDUuNjM2NjI0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.avTBVm-XObWmxPuMdCrkuNmJ_2tfa-mBDeVauZdxd8zAyf7mwjBYtiCNrkWHWry35exuTdX33nKi-_bxSucjtavYoL0xH1MCWD32sJ8QZppF7x2B1tW4TgFivA-MhjSISPZ0JjKnqpOAIH0CYQSSsEf_Hw1c7sBlcTCbjP_Zt03ps75lQfSmzl3qIWsNovlmIQj70WkwkDvdO7FF_KhUDG8NMm-eHfWM_Qf54CGSdma4ZxSf73vNotoC7NyadAKvnxR8yuT76GBk1kcF0UhA9l3cw_tEGRlCZg4zu30GcyJDoSU0Qg2Jp6a6GbLh7tjZWBKIMMAyq9FmjbTB4_9-pG_oWv75lUANyeEfWfWGi8rJ62MRbQpuikJ0O7XuqfMMwCFjM9Aja22lEtwYFZl5Al8-78uudj8ek4xO2wtlSgISpJieXp_qlpvYVnn-xuV-wmdPyjuspZAzCYYiL3UpuR3PvqOQiMdXgeJB9kZj6vBq8fKg8zP6sbOF8qVuFis7mTTdU_mCwyuONn8NLxFLK8L0CYCvyNIPxj35oRfDH_sf-OiEO155m6MWnIIx7zXWg9yhNJQBHxM3fM8GSq_XbJHyEqk5pUkVq5JkOIzkNrqRLZXwDPzPSZ2ppAqivLqqQx3kXPXmivjax2bZFTw69ZEreuXiNm8dHCoaXHuhjyA';
var AuthStr = "Bearer ".concat(USER_TOKEN);
var FollowedByAsynch = (0, _toolkit.createAsyncThunk)('followed_by/:blog_id', function _callee(BlogId) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('before followed by');
          _context.next = 3;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get("followed_by/".concat(BlogId), {
            headers: {
              Authorization: AuthStr
            }
          }));

        case 3:
          response = _context.sent;
          console.log('after followed by'); // setFollow(response.data.response.followed);
          // console.log(response.data.response.followed, 'hi by');

          return _context.abrupt("return", response.data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.FollowedByAsynch = FollowedByAsynch;
var initialState = {
  followed: {
    response: {},
    meta: {
      status: '000',
      msg: 'Loading'
    }
  }
};
var FollowedBySlice = (0, _toolkit.createSlice)({
  name: 'followed',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, FollowedByAsynch.pending, function () {// console.log('Pending');
  }), _defineProperty(_extraReducers, FollowedByAsynch.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    return _objectSpread({}, state, {
      followed: payload
    });
  }), _defineProperty(_extraReducers, FollowedByAsynch.rejected, function () {// console.log('Rejected!');
  }), _extraReducers)
});

var getFollowed = function getFollowed(state) {
  return state.followed.followed;
};

exports.getFollowed = getFollowed;
var FollowedReducer = FollowedBySlice.reducer;
var _default = FollowedReducer;
exports["default"] = _default;