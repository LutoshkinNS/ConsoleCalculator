export const isNumber = (value: string | number): boolean =>
  value !== '' ? !isNaN(Number(value)) : false;
