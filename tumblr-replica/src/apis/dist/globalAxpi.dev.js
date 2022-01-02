"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiR = exports.api = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = _axios["default"].create({
  baseURL: 'http://localhost:8000/'
});

exports.api = api;

var apiR = _axios["default"].create({
  baseURL: 'https://api.tumbler.social/api'
});

exports.apiR = apiR;