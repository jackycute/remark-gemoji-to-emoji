// Dependencies:
var remark = require('remark');
var gemojiToEmoji = require('./index.js');

var gemoji = require('gemoji');

// Process:
var doc = remark().use(gemojiToEmoji).process([
    ':smile: :+1:'
].join('\n'));

// Yields:
console.log('md', doc);
