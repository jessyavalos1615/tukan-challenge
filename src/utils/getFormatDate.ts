import { formatNumberTwoDigits } from "./formatNumberTwoDigits";

export const getFormatDate = (date: Date): string =>
  `${date.getFullYear()}-${formatNumberTwoDigits(
    date.getMonth()
  )}-${formatNumberTwoDigits(date.getDate())}`;
