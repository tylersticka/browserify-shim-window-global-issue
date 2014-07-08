browserify-shim window/global issue
===================================

This repository attempts to reproduce [issue 68](https://github.com/thlorenz/browserify-shim/issues/68), where some scripts fail to shim because they assume that a `this` global will be `window`.

Here's how to run it:

1. `npm install -g browserify`
2. `npm test`

If you encounter issues running `test`, you can also run `build`, `open` and/or `start` scripts. See `package.json` for more info.
