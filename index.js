var async = require('async');
var S = require('string');

module.exports = function asyncDeepTrim(array, cb) {
  async.map(array, function(item, callback) {
    if(!Array.isArray(item)) {
      if(typeof item === 'string') {
        item = S(item).trim().s;
      }
      return callback(null, item);
    }
    asyncDeepTrim(item, function(err, results) {
      if(err) return callback(err, results);
      return callback(null, results);
    });
  }, function done(err, results) {
    if(err) return cb(err, results);
    return cb(null, results);
  });
}
