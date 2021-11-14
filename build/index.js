"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLive = require("react-live");

var _settings = _interopRequireDefault(require("../config/settings"));

var _mix = _interopRequireDefault(require("../config/mix.js"));

require("../config/Source_Code_Pro/SourceCodePro-Bold.ttf");

require("../Recess.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Recess = function Recess(props) {
  var code = props.code ? props.code : _settings["default"].code;
  var filename = props.filename ? props.filename : _settings["default"].filename;
  var dep = props.dep ? props.dep : _settings["default"].dep;
  var onInline = props.onInline ? props.onInline : true;
  var theme = props.theme ? props.theme : _settings["default"].theme;
  var borderNew = "1px solid ".concat((0, _mix["default"])(theme.plain.backgroundColor, "ffffff", 77));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Playground"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "Playground__Header"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, filename)), /*#__PURE__*/_react["default"].createElement(_reactLive.LiveProvider, {
    code: code,
    scope: {
      dep: dep
    },
    noInline: onInline,
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_reactLive.LiveEditor, {
    className: "LiveEditor"
  }), /*#__PURE__*/_react["default"].createElement(_reactLive.LiveError, null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: theme.plain.backgroundColor,
      borderTop: borderNew
    },
    className: "LivePreview__Container"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "LivePreview__Header"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Result")), /*#__PURE__*/_react["default"].createElement(_reactLive.LivePreview, {
    className: "LivePreview"
  }))));
};

var _default = Recess;
exports["default"] = _default;