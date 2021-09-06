"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = void 0;

var _constants = require("../constants");

var addToCart = function addToCart(data) {
  return {
    type: _constants.ADD_TO_CART,
    data: data
  };
}; // export const removeFromCart = (data) => {
//     return {
//       type: 'REMOVE_FROM_CART',
//       data: data,
//     }
// }


exports.addToCart = addToCart;