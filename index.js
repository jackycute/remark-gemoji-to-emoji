/**
 * @author jackycute
 * @copyright 2016 jackycute
 * @license MIT
 * @module remark:gemoji
 * @fileoverview
 *   Plug-in to transform gemoji shortcodes into emoji unicodes
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var visit = require('unist-util-visit');
var gemoji = require('gemoji');

/*
 * Methods.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Transformer.
 *
 * @param {Node} tree - remark node to visit.
 */
function transformer(tree) {
    visit(tree, 'text', function (node) {
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
                    result += value.slice(lastIndex, index) +
                        gemoji.name[subvalue].emoji;

                    lastIndex = next + 1;
                }
            }

            index = next;
        }

        if (lastIndex !== value.length) {
            result += value.slice(lastIndex);
        }

        node.value = result;
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
