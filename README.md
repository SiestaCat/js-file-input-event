# file-input-event <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get the byte length of an ArrayBuffer, even in engines without a `.byteLength` method.

## Example

```js
const FileInputEvent = require('file-input-event');

let file_input_event = new FileInputEvent('#file-input', '#button_clear').setReadyStatusCallback((ready, files, size) => {

    if(ready)
    {
        console.log("Ready");
    }

    if(!ready)
    {
        console.log("NOT Ready");
    }
});
```

## Tests
Simply clone the repo, `npm install`

[package-url]: https://npmjs.org/package/file-input-event
[npm-version-svg]: https://versionbadg.es/SiestaCat/js-file-input-event.svg
[npm-badge-png]: https://nodei.co/npm/file-input-event.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/file-input-event.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/file-input-event.svg
[downloads-url]: https://npm-stat.com/charts.html?package=file-input-event