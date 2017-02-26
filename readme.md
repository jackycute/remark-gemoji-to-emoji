# remark-gemoji-to-emoji [![Build Status][travis-badge]][travis]

[**remark**][remark] plug-in to transform gemoji shortcodes into emoji unicodes

## Installation

[npm][npm-install]:

```bash
npm install remark-gemoji-to-emoji
```

## Usage

```javascript
var remark = require('remark');
var gemojiToEmoji = require('remark-gemoji-to-emoji');

var doc = remark().use(gemojiToEmoji).processSync(':smile: :+1:');
console.log(doc);
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
