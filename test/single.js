var test = require('tape');
var asyncDeepTrim = require('../');

var names = ['bob   ', 'joe', '   jane  '];
var trimmedNames = ['bob', 'joe', 'jane'];

test('single', function(t) {
  t.plan(1);

  asyncDeepTrim(names, function(err, result) {
    if (err) console.log(err);

    t.same(result, trimmedNames);
  });
});