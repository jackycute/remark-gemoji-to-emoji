'use strict';

var test = require('tape');
var remark = require('remark');
var gemoji = require('gemoji');
var gemojiToEmoji = require('./');

var processor = remark().use(gemojiToEmoji);

var emojiList = [];
var renderedEmojiList = [];

Object.keys(gemoji.name).forEach(function (key) {
  var emoji = gemoji.name[key].emoji;

  emojiList.push(':' + key + ':');

  if (/[#*]/.test(emoji.charAt(0))) {
    emoji = '\\' + emoji;
  }

  renderedEmojiList.push(emoji);
});

test('remark-gemoji-to-emoji', function (t) {
  processor.process(':+1:', function (err, file) {
    t.ifErr(err);
    t.equal(String(file), '👍\n', 'one gemoji');
  });

  processor.process(':+1::-1:', function (err, file) {
    t.ifErr(err);
    t.equal(String(file), '👍👎\n', 'two gemoji');
  });

  processor.process('a :+1: b :-1: c', function (err, file) {
    t.ifErr(err);
    t.equal(String(file), 'a 👍 b 👎 c\n', 'two gemoji');
  });

  processor.process('No colons', function (err, file) {
    t.ifErr(err);
    t.equal(String(file), 'No colons\n', 'no colons');
  });

  processor.process('One: colon', function (err, file) {
    t.ifErr(err);
    t.equal(String(file), 'One: colon\n', 'one colon');
  });

  processor.process([
    ':none:',
    emojiList.join('\n'),
    ':not_valid:',
    ''
  ].join('\n'), function (err, file) {
    t.ifErr(err);

    t.equal(String(file), [
      ':none:',
      renderedEmojiList.join('\n'),
      ':not_valid:',
      ''
    ].join('\n'));
  });

  t.end();
});
