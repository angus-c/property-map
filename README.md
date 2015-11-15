## object-map

Apply a function to each property of an object

### Install

```
npm install object-map
```

### API

objectMap(_baseObj_, _callback_ [, _thisObject_]);

_callback_ is a function that can accept up to three arguments:

**value**  
The value for each property in _baseObj_  
**key** (optional)  
The key for each property in _baseObj_  
**baseObj** (optional)  
The _baseObj_  

### Usage

```js
// commonJS...
var objectMap = require('object-map');
// ...or es2015
import objectMap from 'object-map';

objectMap(
  {a: 4, b: 6, c: 3},
  value => value + 1
); // {a: 5, b: 7, c: 4}

objectMap(
  {a: 4, b: 6, c: 3},
  function(_, key) {return this[key]},
  {a: 1, c: 3}
); // {a: 1, b: undefined, c: 3}
```

### Tests

```
npm test
```
