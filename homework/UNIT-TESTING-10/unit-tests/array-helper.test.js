const { ArrayHelper } = require("../units/array-helper.js");

// Writing Unit Tests
test('Positive testing of sum method', () => {
  expect(ArrayHelper.sum([1, 2, 3])).toBe(6);
});

