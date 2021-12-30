"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchAsyncgraphtotalfollowers = exports.fetchAsyncgraphnewfollowers = exports.fetchAsyncgraphnotes = exports.getTotalfollowers = exports.getNewfollowers = exports.getNotes = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _globalAxpi = require("../../../apis/globalAxpi");

var _globalAPI = require("../../../apis/globalAPI");

var _extraReducers;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchAsyncgraphnotes = (0, _toolkit.createAsyncThunk)('graph/notes', function _callee(dispatch, _ref) {
  var getState, response, Notes, graphdata, i, datene, mydate, point, state, USERTOKEN, AuthStr, _response, _Notes, _graphdata, _i, _datene, _mydate, _point;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getState = _ref.getState;

          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context.next = 20;
            break;
          }

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('notes'));

        case 5:
          response = _context.sent;
          console.log(response.data);
          Notes = response.data;
          graphdata = [];

          for (i = 0; i < Notes.response.data.length; i += 1) {
            console.log(Notes.response.data[i]);
            datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
            mydate = new Date();
            mydate.setFullYear(datene[0]);
            mydate.setMonth(datene[1] - 1);
            mydate.setDate(datene[2]);
            mydate.setHours(datene[3], datene[4], datene[5]);
            point = {
              x: mydate,
              y: Notes.response.data[i].notes
            };
            console.log(point);
            graphdata.push(point);
          }

          Notes.response.data = graphdata;
          console.log(Notes);
          return _context.abrupt("return", Notes);

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          throw Error(_context.t0);

        case 18:
          _context.next = 40;
          break;

        case 20:
          _context.prev = 20;
          state = getState();
          console.log(state);
          USERTOKEN = state.user.user.accessToken;
          console.log(USERTOKEN);
          AuthStr = "Bearer ".concat(USERTOKEN);
          _context.next = 28;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get("graph/notes/".concat(dispatch.period, "/").concat(dispatch.rate), {
            headers: {
              Authorization: AuthStr
            }
          }));

        case 28:
          _response = _context.sent;
          _Notes = _response.data;
          _graphdata = [];

          for (_i = 0; _i < _Notes.response.data.length; _i += 1) {
            console.log(_Notes.response.data[_i]);
            _datene = _Notes.response.data[_i].timestamp.split(/[\s,:-]+/);
            _mydate = new Date();

            _mydate.setFullYear(_datene[0]);

            _mydate.setMonth(_datene[1]);

            _mydate.setDate(_datene[2]);

            _mydate.setHours(_datene[3], _datene[4], _datene[5]);

            _point = {
              x: _mydate,
              y: _Notes.response.data[_i].notes
            };
            console.log(_point);

            _graphdata.push(_point);
          }

          _Notes.response.data = _graphdata;
          console.log(_Notes);
          return _context.abrupt("return", _Notes);

        case 37:
          _context.prev = 37;
          _context.t1 = _context["catch"](20);
          throw Error(_context.t1);

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 15], [20, 37]]);
});
exports.fetchAsyncgraphnotes = fetchAsyncgraphnotes;
var fetchAsyncgraphnewfollowers = (0, _toolkit.createAsyncThunk)('graph/newfollowers', function _callee2(dispatch, _ref2) {
  var getState, response, Notes, graphdata, i, datene, mydate, point, state, USERTOKEN, AuthStr, _response2, _Notes2, _graphdata2, _i2, _datene2, _mydate2, _point2;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          getState = _ref2.getState;

          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context2.next = 19;
            break;
          }

          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('newfollowers'));

        case 5:
          response = _context2.sent;
          Notes = response.data;
          graphdata = [];

          for (i = 0; i < Notes.response.data.length; i += 1) {
            console.log(Notes.response.data[i]);
            datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
            mydate = new Date();
            mydate.setFullYear(datene[0]);
            mydate.setMonth(datene[1]);
            mydate.setDate(datene[2]);
            mydate.setHours(datene[3], datene[4], datene[5]);
            point = {
              x: mydate,
              y: Notes.response.data[i].new_followers
            };
            console.log(point);
            graphdata.push(point);
          }

          Notes.response.data = graphdata;
          console.log(Notes);
          return _context2.abrupt("return", Notes);

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](2);
          throw Error(_context2.t0);

        case 17:
          _context2.next = 39;
          break;

        case 19:
          _context2.prev = 19;
          state = getState();
          console.log(state);
          USERTOKEN = state.user.user.accessToken;
          console.log(USERTOKEN);
          AuthStr = "Bearer ".concat(USERTOKEN);
          _context2.next = 27;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get("graph/new_followers/".concat(dispatch.BlogId, "/").concat(dispatch.period, "/").concat(dispatch.rate), {
            headers: {
              Authorization: AuthStr
            }
          }));

        case 27:
          _response2 = _context2.sent;
          _Notes2 = _response2.data;
          _graphdata2 = [];

          for (_i2 = 0; _i2 < _Notes2.response.data.length; _i2 += 1) {
            console.log(_Notes2.response.data[_i2]);
            _datene2 = _Notes2.response.data[_i2].timestamp.split(/[\s,:-]+/);
            _mydate2 = new Date();

            _mydate2.setFullYear(_datene2[0]);

            _mydate2.setMonth(_datene2[1]);

            _mydate2.setDate(_datene2[2]);

            _mydate2.setHours(_datene2[3], _datene2[4], _datene2[5]);

            _point2 = {
              x: _mydate2,
              y: _Notes2.response.data[_i2].total_followers
            };
            console.log(_point2);

            _graphdata2.push(_point2);
          }

          _Notes2.response.data = _graphdata2;
          console.log(_Notes2);
          return _context2.abrupt("return", _Notes2);

        case 36:
          _context2.prev = 36;
          _context2.t1 = _context2["catch"](19);
          throw Error(_context2.t1);

        case 39:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 14], [19, 36]]);
});
exports.fetchAsyncgraphnewfollowers = fetchAsyncgraphnewfollowers;
var fetchAsyncgraphtotalfollowers = (0, _toolkit.createAsyncThunk)('graph/totalfollowes', function _callee3(dispatch, _ref3) {
  var getState, response, Notes, graphdata, i, datene, mydate, point, state, USERTOKEN, AuthStr, _response3, _Notes3, _graphdata3, _i3, _datene3, _mydate3, _point3;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          getState = _ref3.getState;

          if (!(_globalAPI.SERVICETYPE === _globalAPI.MOCK)) {
            _context3.next = 19;
            break;
          }

          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(_globalAxpi.api.get('totalfollowers'));

        case 5:
          response = _context3.sent;
          Notes = response.data;
          graphdata = [];

          for (i = 0; i < Notes.response.data.length; i += 1) {
            console.log(Notes.response.data[i]);
            datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
            mydate = new Date();
            mydate.setFullYear(datene[0]);
            mydate.setMonth(datene[1]);
            mydate.setDate(datene[2]);
            mydate.setHours(datene[3], datene[4], datene[5]);
            point = {
              x: mydate,
              y: Notes.response.data[i].total_followers
            };
            console.log(point);
            graphdata.push(point);
          }

          Notes.response.data = graphdata;
          console.log(Notes);
          return _context3.abrupt("return", Notes);

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](2);
          throw Error(_context3.t0);

        case 17:
          _context3.next = 39;
          break;

        case 19:
          _context3.prev = 19;
          state = getState();
          console.log(state);
          USERTOKEN = state.user.user.accessToken;
          console.log(USERTOKEN);
          AuthStr = "Bearer ".concat(USERTOKEN);
          _context3.next = 27;
          return regeneratorRuntime.awrap(_globalAxpi.apiR.get("graph/total_followers/".concat(dispatch.period, "/").concat(dispatch.rate), {
            headers: {
              Authorization: AuthStr
            }
          }));

        case 27:
          _response3 = _context3.sent;
          _Notes3 = _response3.data;
          _graphdata3 = [];

          for (_i3 = 0; _i3 < _Notes3.response.data.length; _i3 += 1) {
            console.log(_Notes3.response.data[_i3]);
            _datene3 = _Notes3.response.data[_i3].timestamp.split(/[\s,:-]+/);
            _mydate3 = new Date();

            _mydate3.setFullYear(_datene3[0]);

            _mydate3.setMonth(_datene3[1]);

            _mydate3.setDate(_datene3[2]);

            _mydate3.setHours(_datene3[3], _datene3[4], _datene3[5]);

            _point3 = {
              x: _mydate3,
              y: _Notes3.response.data[_i3].total_followers
            };
            console.log(_point3);

            _graphdata3.push(_point3);
          }

          _Notes3.response.data = _graphdata3;
          console.log(_Notes3);
          return _context3.abrupt("return", _Notes3);

        case 36:
          _context3.prev = 36;
          _context3.t1 = _context3["catch"](19);
          throw Error(_context3.t1);

        case 39:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 14], [19, 36]]);
});
exports.fetchAsyncgraphtotalfollowers = fetchAsyncgraphtotalfollowers;
var initialState = {
  notes: {
    response: {},
    meta: {
      status: '000',
      msg: 'Loading'
    },
    error: false
  },
  newfollowers: {
    response: {},
    meta: {
      status: '000',
      msg: 'Loading'
    },
    error: false
  },
  totalfollowers: {
    response: {},
    meta: {
      status: '000',
      msg: 'Loading'
    },
    error: false
  }
};
var graphSlice = (0, _toolkit.createSlice)({
  name: 'graph',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchAsyncgraphnotes.pending, function () {// console.log('Pending');
  }), _defineProperty(_extraReducers, fetchAsyncgraphnotes.fulfilled, function (state, _ref4) {
    var payload = _ref4.payload;
    return _objectSpread({}, state, {
      notes: payload
    });
  }), _defineProperty(_extraReducers, fetchAsyncgraphnotes.rejected, function (state) {
    return _objectSpread({}, state, {
      notes: _objectSpread({}, state.notes, {
        error: true
      })
    });
  }), _defineProperty(_extraReducers, fetchAsyncgraphnewfollowers.pending, function () {// console.log('Pending');
  }), _defineProperty(_extraReducers, fetchAsyncgraphnewfollowers.fulfilled, function (state, _ref5) {
    var payload = _ref5.payload;
    return _objectSpread({}, state, {
      newfollowers: payload
    });
  }), _defineProperty(_extraReducers, fetchAsyncgraphnewfollowers.rejected, function (state) {
    return _objectSpread({}, state, {
      newfollowers: _objectSpread({}, state.newfollowers, {
        error: true
      })
    });
  }), _defineProperty(_extraReducers, fetchAsyncgraphtotalfollowers.pending, function () {// console.log('Pending');
  }), _defineProperty(_extraReducers, fetchAsyncgraphtotalfollowers.fulfilled, function (state, _ref6) {
    var payload = _ref6.payload;
    return _objectSpread({}, state, {
      totalfollowers: payload
    });
  }), _defineProperty(_extraReducers, fetchAsyncgraphtotalfollowers.rejected, function (state) {
    return _objectSpread({}, state, {
      totalfollowers: _objectSpread({}, state.totalfollowers, {
        error: true
      })
    });
  }), _extraReducers)
});

var getNotes = function getNotes(state) {
  return state.graph.notes;
};

exports.getNotes = getNotes;

var getNewfollowers = function getNewfollowers(state) {
  return state.graph.newfollowers;
};

exports.getNewfollowers = getNewfollowers;

var getTotalfollowers = function getTotalfollowers(state) {
  return state.graph.totalfollowers;
};

exports.getTotalfollowers = getTotalfollowers;
var graphReducer = graphSlice.reducer;
var _default = graphReducer;
exports["default"] = _default;