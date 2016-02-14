# remark-gemoji-to-emoji [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

[**remark**][remark] plug-in to transform gemoji shortcodes into emoji unicodes (for example, `:smile:` into 😄)

## Installation

[npm][npm-install]:

```bash
npm install remark-gemoji-to-emoji
```

**remark-gemoji-to-emoji** is also available as an AMD, CommonJS, and globals
module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var remark = require('remark');
var gemojiToEmoji = require('remark-gemoji-to-emoji');
```

Process:

```javascript
var doc = remark().use(gemojiToEmoji).process([
    ':smile: :+1:'
].join('\n'));
```

Yields:

```markdown
😄 👍
```

## API

### `remark().use(gemojiToEmoji)`

Transform gemoji shortcodes into emoji unicodes (for example, `:smile:` into 😄).

## License

[MIT][license] © [Max Wu][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/jackycute/remark-gemoji-to-emoji.svg

[travis]: https://travis-ci.org/jackycute/remark-gemoji-to-emoji

[codecov-badge]: https://img.shields.io/codecov/c/github/jackycute/remark-gemoji-to-emoji.svg

[codecov]: https://codecov.io/github/jackycute/remark-gemoji-to-emoji

[npm-install]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/jackycute/remark-gemoji-to-emoji/releases

[license]: LICENSE

[author]: https://github.com/jackycute

[remark]: https://github.com/wooorm/remark

[shields]: http://shields.io
