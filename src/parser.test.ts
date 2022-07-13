import { getStack, preparesStack } from './parser';

describe('parser', () => {
  test('splitting a string into an array', () => {
    expect(getStack('10 + 4 / 2')).toEqual(['10', '+', '4', '/', '2']);
  });

  test('change type for numbers from string', () => {
    expect(preparesStack(['10', '+', '4', '/', '2'])).toEqual([10, '+', 4, '/', 2]);
  });

  // test('reverse stack', () => {
  //   expect(getReverseStack(['10', '+', '4', '/', '2'])).toEqual(['2', '/', '4', '+', '10']);
  // });

  // test('split into string/numbers arrays', () => {
  //   expect(splitsStacks(['2', '/', '4', '+', '10'])).toEqual([
  //     [2, 4, 10],
  //     ['/', '+'],
  //   ]);
  // });
});
