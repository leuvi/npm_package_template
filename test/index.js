'use strict';

var test = require('tape');
var same = require('../');

test('same', function (t) {
  var a = 3;
  var b = 3;
  var c = '3';
  var d = {};
  t.equal(same(a, b), true, 'a === b');
  t.equal(same(a, c), false, 'a !== c');
  // t['throws'](function () {
  //   same(a, d);
  // }, TypeError, 'parameter d cannot be a object');
  t.end();
});
