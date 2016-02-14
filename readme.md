# remark-gemoji-to-emoji [![Build Status][travis-badge]][travis]

[**remark**][remark] plug-in to transform gemoji shortcodes into emoji unicodes

## Installation

[npm][npm-install]:

```bash
npm install remark-gemoji-to-emoji
```

## Usage

Dependencies:

```javascript
var remark = require('remark');
var gemojiToEmoji = require('remark-gemoji-to-emoji');
var gemoji = require('gemoji');
```

Process:

```javascript
var doc = remark().use(gemojiToEmoji).process([
    ':smile: :+1:'
].join('\n'));
```

Yields:

```md
😄 👍
```

## API

### `remark().use(gemojiToEmoji)`

Transform gemoji shortcodes into emoji unicodes (like `:smile:` into 😄).

## License

[MIT][license] © [Max Wu][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/jackycute/remark-gemoji-to-emoji.svg

[travis]: https://travis-ci.org/jackycute/remark-gemoji-to-emoji

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: https://github.com/jackycute

[remark]: https://github.com/wooorm/remark
