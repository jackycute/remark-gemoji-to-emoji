// Dependencies:
var remark = require('remark');
var gemojiToEmoji = require('./index.js');

var gemoji = require('gemoji');

var emojiList = [];
Object.keys(gemoji.name).forEach(function (key) {
    emojiList.push(':' + key + ':');
});

// Process:
var doc = remark().use(gemojiToEmoji).process([
    emojiList,
    ''
].join('\n'));

// Yields:
console.log('md', doc);
