import { mathOperatorsList, priority } from './mathFunction';

export const calculate = (numbers: number[], operator: string): number => {
  return mathOperatorsList[operator](numbers[0], numbers[1]);
};

export const calculator = (stack: (string | number)[]): any => {
  stack.reduce<number[]>((result, item, idx): any => {
    const operators: string[] = [];
    if (typeof item === 'number') {
      return result.push(item);
    }
    const prevOperator = operators.slice(-1)[0];
    if (priority[item] > priority[prevOperator]) {
      result = [...result.slice(0, -2), calculate(result.slice(-2), item)];
      return result;
    } else {
      operators.push(item);
    }
  }, []);
};
