var same = require('../');

test('same toBeTruthy', () => {
  expect(same(1, 1)).toBeTruthy();
});

test('same toBeFalsy', () => {
  expect(same(1, 2)).toBeFalsy();
});