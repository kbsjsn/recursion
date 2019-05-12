// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (obj == NaN || obj == Infinity || obj == null) {
    return 'null';
  }
  if(typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }
  if(typeof obj == 'string') {
    return '"' + obj + '"';
  }

  if(Array.isArray(obj)) {
    if(obj.length == 0) {
      return '[]';
    }
    var sub = '[';
    for(var i of obj) {
      sub += stringifyJSON(i) + ',';
    }
    if(sub[sub.length - 1] == ',') {
      sub = sub.substring(0, sub.length - 1); //deletes last comma
    }
    sub += ']';
    return sub;
  }

  if(typeof obj == 'object') {
    if(Object.keys(obj).length == 0) {
      return '{}';
    }

    var sub = '{';
    for(var key in obj) {
      if(typeof obj[key] == 'function' || obj[key] === undefined) {
        sub += '';
      }
      else {
        sub += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    if(sub[sub.length - 1] == ',') {
      sub = sub.substring(0, sub.length - 1);
    }
    sub += '}';
    return sub;
  }

};
