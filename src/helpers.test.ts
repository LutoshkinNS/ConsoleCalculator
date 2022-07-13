import { isNumber } from './helpers';

describe('isNumber', () => {
  test('10 is number', () => {
    expect(isNumber(10)).toBe(true);
  });

  test('"10" is number', () => {
    expect(isNumber('10')).toBe(true);
  });

  test('"string" is not a number', () => {
    expect(isNumber('string')).toBe(false);
  });

  test('"" is not a number', () => {
    expect(isNumber('string')).toBe(false);
  });
});
