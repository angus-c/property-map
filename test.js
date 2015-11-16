import propertyMap from './index';
import { assert } from 'chai';

const baseObj = {a: 3, b: 9, c: 12};
let mappedObj;

describe('predicate function argument', () => {
  it('uses the value argument', () => {
    mappedObj = propertyMap(baseObj, value => value + 1);
    assert.deepEqual(mappedObj, { a: 4, b: 10, c: 13 });
  });
  it('uses the key argument', () => {
    mappedObj = propertyMap(baseObj, (_, key) => key);
    assert.deepEqual(mappedObj, { a: 'a', b: 'b', c: 'c' });
  });
  it('uses the baseObj argument', () => {
    mappedObj = propertyMap(baseObj, (_, __, baseObj) => baseObj);
    assert.deepEqual(mappedObj, { a: baseObj, b: baseObj, c: baseObj });
  });
});

describe('context argument', () => {
  it('is used as the `this` value', () => {
    mappedObj = propertyMap(
      baseObj,
      function(_,key) {return this[key]},
      {a: 1, c: 3}
    );
    assert.deepEqual(mappedObj, { a: 1, b: undefined, c: 3 });
  });
});
