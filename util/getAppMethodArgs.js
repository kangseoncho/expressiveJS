/*
used in app.METHOD to collect paramaters in a unified format and intersperse
watch-dog middleware.


*/

const expressiveMidware = require('./trackingMidware.js');

//flattens a multi-dimensional array to a one-dimensional array
function flatten(array) {
  if (!Array.isArray(array)) return array;
  let result = [];
  array.forEach(el => {
    result = result.concat(flatten(el));
  });
  return result;
}

// accepts the arguments of app.METHOD and returns an object with the path and a
// flattened array with the devMidware.  Used in getAppMethodArgs
function collectMethodArgs(...args) {
  //path is not defined if the first argument is a function
  const path = typeof args[0] === 'function' ? null : args[0];
  const devMidware = path === null ? flatten(args) : flatten(args.slice(1));
  return {
    path,
    devMidware
  }
}

//accepts arguments of app.METHOD, uses collectMethods to format devMidware,
//and wraps devMidware with the Expressive tracking midware
//name of previous function is passed
function getAppMethodArgs(args) {
  const { path, devMidware } = collectMethodArgs(...args);
  const newMidware = devMidware.map(key => expressiveMidware(key));
  return path === null ? [...newMidware] : [path, ...newMidware];
}


module.exports = getAppMethodArgs;
