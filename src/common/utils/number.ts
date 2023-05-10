export const calculatePercentageRounded = (
  number: number,
  base: number
): number => {
  const value = (number * 100) / base || 0;
  if (value > 100) {
    return 100;
  }
  if (value < 0) {
    return 0;
  }
  return Math.ceil(value);
};

export const addition = (first: number, second: number): number =>
  first + second;
