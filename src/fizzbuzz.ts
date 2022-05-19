export const fizzbuzz = (num: number): string => {
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num.toString();
};
