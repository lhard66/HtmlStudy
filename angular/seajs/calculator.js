'use strict'

define(function(require, exports, module) {
  var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += parseFloat(arguments[i]);
    }
    return result;
  }
  module.exports = {
    add: add
  }
});
