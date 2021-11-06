"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLive = require("react-live");

var _settings = _interopRequireDefault(require("../config/settings"));

require("../Recess.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mix(color_1, color_2, weight) {
  color_1 = color_1[0] === '#' ? color_1.substring(1) : color_1;
  color_2 = color_2[0] === '#' ? color_2.substring(1) : color_2;
  weight = typeof weight !== 'undefined' ? weight : 77;

  if (color_1[0] === 'f') {
    return "#dddfe1";
  }

  var color = "#";

  for (var i = 0; i <= 5; i += 2) {
    var v1 = parseInt(color_1.substr(i, 2), 16),
        v2 = parseInt(color_2.substr(i, 2), 16),
        val = Math.floor(v2 + (v1 - v2) * (weight / 100.0)).toString(16);

    while (val.length < 2) {
      val = '0' + val;
    }

    color += val;
  }

  return color;
}

var Recess = function Recess(props) {
  var code = props.code ? props.code : _settings["default"].code;
  var filename = props.filename ? props.filename : _settings["default"].filename;
  var dep = props.dep ? props.dep : _settings["default"].dep;
  var onInline = props.onInline ? props.onInline : true;
  var theme = props.theme ? props.theme : _settings["default"].theme;
  var borderNew = "1px solid ".concat(mix(theme.plain.backgroundColor, "ffffff", 77));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Playground"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "Playground__Header"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, filename)), /*#__PURE__*/_react["default"].createElement(_reactLive.LiveProvider, {
    code: code,
    scope: dep,
    noInline: onInline,
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_reactLive.LiveEditor, {
    style: {
      width: '100%'
    }
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