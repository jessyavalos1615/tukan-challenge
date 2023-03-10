export const formatNumberTwoDigits = (number: number): string =>
  number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
