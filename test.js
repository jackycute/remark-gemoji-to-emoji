/**
 * @author jackycute
 * @copyright 2016 jackycute
 * @license MIT
 * @module remark:gemoji
 * @fileoverview
 *   Plug-in to transform emoji syntax into gemoji
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var remark = require('remark');
var remarkGemoji = require('./index.js');

var gemoji = require('gemoji');

var emojiList = [];
Object.keys(gemoji.name).forEach(function (key) {
    emojiList.push(':' + key + ':');
});

var renderedEmojiList = [];
Object.keys(gemoji.name).forEach(function (key) {
    renderedEmojiList.push(gemoji.name[key].emoji);
});

/*
 * Tests.
 */

test('remark-gemoji', function (t) {
    remark.use(remarkGemoji).process([
        ':none:',
        emojiList,
        ':not_valid:',
        ''
    ].join('\n'), function (err, file, doc) {
        t.ifErr(err);

        t.equal(doc, [
            ':none:',
            renderedEmojiList,
            ':not\\_valid:',
            ''
        ].join('\n'));

        t.end();
    });
});
