[![NPM version](http://img.shields.io/npm/v/stylelint-config-moxio.svg)](https://www.npmjs.org/package/stylelint-config-moxio)

stylelint-config-moxio
======================
The standard shareable config for [stylelint](https://github.com/stylelint/stylelint) used at Moxio.

Installation
------------

```bash
npm install stylelint-config-moxio
```

Usage
-----
If you've installed `stylelint-config-moxio` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-moxio"
}
```

If you've globally installed `stylelint-config-moxio` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-moxio` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-moxio"
}
```

Extending the config
--------------------
Simply add a `"rules"` key to your config, then add your overrides and additions there.

License
-------
This plugin is released under the MIT license.
