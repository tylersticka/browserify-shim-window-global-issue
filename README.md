browserify-shim window/global issue
===================================

This repository attempts to reproduce [issue 68](https://github.com/thlorenz/browserify-shim/issues/68), where some scripts fail to shim because they assume that a `this` global will be `window`.

Here's how to run it:

1. Install Browserify globally: `npm install -g browserify`
2. Install local dependencies: `npm install`
3. Run the start script: `npm start`

If the start script gives you trouble, run `npm run build` and then open `build/index.html` in your browser.
