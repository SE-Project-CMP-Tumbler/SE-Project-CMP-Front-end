Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _axios = _interopRequireDefault(require('axios'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _default = _axios.default.create({
  baseURL: 'http://localhost:8000/', // baseURL: 'https://api.tumbler.social/api',

});

exports.default = _default;
