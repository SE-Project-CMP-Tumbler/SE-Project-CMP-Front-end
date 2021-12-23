"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _axios["default"].create({
  // baseURL: 'http://localhost:8000/',
  baseURL: 'https://api.dev.tumbler.social/api'
});

exports["default"] = _default;