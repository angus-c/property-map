Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function(obj, fn, ctxt) {
  const result = {};
  Object.keys(obj).forEach(function(key) {
    result[key] = fn.call(ctxt, obj[key], key, obj);
  });
  return result;
}

module.exports = exports['default'];
