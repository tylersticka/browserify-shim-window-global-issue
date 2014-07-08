// Non-CommonJS module that expects `this` to be `window`
;(function (w) {
  var el = document.getElementById('result');
  if (w.document === undefined) {
    el.innerHTML = 'failure: <code>this</code> is not <code>window</code>';
  } else {
    el.innerHTML = 'success: <code>this</code> is <code>window</code>';
  }
})(this);
