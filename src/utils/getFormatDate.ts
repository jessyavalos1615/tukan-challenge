import { formatNumberTwoDigits } from "./formatNumberTwoDigits";

export const getFormatDate = (date: Date): string =>
  `${date.getFullYear()}-${formatNumberTwoDigits(
    date.getMonth() + 1
  )}-${formatNumberTwoDigits(date.getDate())}`;

export const setFormatDate = (date: string): Date => {
  const dateArr = date.split("-");
  return new Date(`${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`);
};
