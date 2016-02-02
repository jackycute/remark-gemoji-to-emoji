/**
 * @author jackycute
 * @copyright 2016 jackycute
 * @license MIT
 * @module remark:gemoji
 * @fileoverview
 *   Plug-in to transform emoji syntax into gemoji
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var visit = require('unist-util-visit');
var gemoji = require('gemoji');

/**
 * Transformer.
 *
 * @param {Node} tree - remark node to visit.
 */
function transformer(tree) {
    visit(tree, 'text', function (node) {
        var emoticons = {
            /* :..: */
            'named': /:([a-z0-9A-Z_-]+):/g,
            /* :+1: */
            'thumbsup': /:\+1:/g,
            /* :-1: */
            'thumbsdown': /:\-1:/g
        };
        node.value = node.value.replace(emoticons.thumbsup,
                                        gemoji.name['+1'].emoji);
        node.value = node.value.replace(emoticons.thumbsdown,
                                        gemoji.name['-1'].emoji);
        // js mess up with unicode regex
        // workaround is remember the map first then replace later
        var match;
        var matches = [];
        while ((match = emoticons.named.exec(node.value)) !== null) {
            var matchGemoji = gemoji.name[match[1]];
            if (matchGemoji) {
                matches.push({
                    'index': match.index,
                    'str': match[0],
                    'emoji': matchGemoji.emoji
                });
            }
        }
        // calculate the bias between the replacements
        var bias = 0;
        for (var i = 0, l = matches.length; i < l; i++) {
            match = matches[i];
            node.value = node.value.substr(0, match.index + bias)
                + match.emoji
                + node.value.substr(match.index + match.str.length + bias);
            bias += match.emoji.length - match.str.length;
        }
    });
}

/**
 * Attacher.
 *
 * @return {function(node)} - Transformer.
 */
function attacher() {
    return transformer;
}

/*
 * Expose.
 */

module.exports = attacher;
