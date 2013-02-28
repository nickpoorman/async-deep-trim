async-deep-trim
===============

Asynchronous recursive module to trim Strings in large arrays.

I made this to trim extremely large (and nested) arrays (faster). I didn't need it to handle nested objects, but if you do (or you find a better solution) feel free to submit a pull request.

Note: This only works with arrays. 

``` js
var names = ['bob   ', 'joe', '   jane  ', ['  ran', 'blog  ', 'nope']];
```

The following will not trim the inner object:

``` js
var names = ['bob   ', 'joe', '   jane  ', { ['  ran', 'blog  ', 'nope'] } ];
```

# example

``` js
var asyncDeepTrim = require('async-deep-trim');

var names = ['bob   ', 'joe', '   jane  '];

asyncDeepTrim(names, function(err, results){
  if(err) console.log(err);
  console.log(results);
});
```

# methods

``` js
var asyncDeepTrim = require('async-deep-trim')
```

## asyncDeepTrim(array, cb)

This method takes a callback `cb(err, result)` that will return the array with its string elements trimmed.

# install

With [npm](http://npmjs.org) do:

```
npm install async-deep-trim
```

# license

MIT
