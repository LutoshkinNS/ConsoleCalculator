export const getStack = (string: string): string[] => string.split(' ');

// export const getReverseStack = (stack: string[]): string[] => stack.reverse();

export const preparesStack = (stack: string[]): (string | number)[] => {
  return stack.reduce<(string | number)[]>((preparedStack, currentValue) => {
    if (!isNaN(Number(currentValue))) {
      preparedStack.push(Number(currentValue));
    } else {
      preparedStack.push(currentValue);
    }
    return preparedStack;
  }, []);
};

export const parser = (string: string): (number | string)[] => {
  return preparesStack(getStack(string));
};
