var asyncDeepTrim = require('../');

var names = ['bob   ', 'joe', '   jane  '];

asyncDeepTrim(names, function(err, results){
  if(err) console.log(err);
  console.log(results);
});

