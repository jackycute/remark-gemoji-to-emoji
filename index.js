'use strict';

var visit = require('unist-util-visit');
var gemoji = require('gemoji');

module.exports = gemojiToEmoji;

var has = Object.prototype.hasOwnProperty;

function gemojiToEmoji() {
  return transformer;
}

function transformer(tree) {
  visit(tree, 'text', visitor);
}

function visitor(node) {
  var value = node.value;
  var index = value.indexOf(':');
  var lastIndex = 0;
  var result = '';
  var subvalue;
  var next;

  while (index !== -1) {
    next = value.indexOf(':', index + 1);

    if (next !== -1) {
      subvalue = value.slice(index + 1, next);

      if (has.call(gemoji.name, subvalue)) {
        result += value.slice(lastIndex, index) + gemoji.name[subvalue].emoji;
        lastIndex = next + 1;
      }
    }

    index = next;
  }

  if (lastIndex !== value.length) {
    result += value.slice(lastIndex);
  }

  node.value = result;
}
