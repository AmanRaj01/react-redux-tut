"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = require("./reducer");

var _default = (0, _redux.combineReducers)({
  cartItems: _reducer.cartItems
});

exports["default"] = _default;