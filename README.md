## property-map

Apply a function to each property of an object

### Install

```
npm install property-map
```

### API

propertyMap(_baseObj_, _callback_ [, _thisObject_]);

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
var propertyMap = require('property-map');
// ...or es2015
import propertyMap from 'property-map';

propertyMap({height: 4, width: 3}, x => x + 1); // {height: 5, width: 4}

propertyMap(
  {a: 4, b: 6, c: 3},
  function(_, key) {return this[key]},
  {a: 1, c: 3}
); // {a: 1, b: undefined, c: 3}
```

### Tests

```
npm test
```
