import { addition, subtraction, multiplication, division } from './mathFunction';

describe('math function', () => {
  test('adds 10 + 2 to equal 12', () => {
    const value = addition(10, 2);
    expect(value).toBe(12);
  });

  test('adds 10 - 2 to equal ', () => {
    const value = subtraction(10, 2);
    expect(value).toBe(8);
  });

  test('adds 10 * 2 to equal 20', () => {
    const value = multiplication(10, 2);
    expect(value).toBe(20);
  });

  test('adds 10 / 2 to equal 5', () => {
    const value = division(10, 2);
    expect(value).toBe(5);
  });
});
