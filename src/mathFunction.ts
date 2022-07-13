export type MathFunction = (a: number, b: number) => number;

export const addition: MathFunction = (a, b) => a + b;

export const subtraction: MathFunction = (a, b) => a - b;

export const multiplication: MathFunction = (a, b) => a * b;

export const division: MathFunction = (a, b) => a / b;

export const mathOperatorsList: Record<string, MathFunction> = {
  '+': addition,
  '-': subtraction,
  '*': multiplication,
  '/': division,
};

export const priority: Record<string, number> = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};
