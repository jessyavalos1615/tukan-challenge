import React from "react";
import { DateRangePicker } from "rsuite";

import { DateRangeProps } from "./DateRangeTypes";
import { DateRangeContainer } from "./Style";

const DateRange = ({ onChange }: DateRangeProps) => {
  return (
    <DateRangeContainer>
      <DateRangePicker placeholder="Choose range date" onChange={onChange} />
    </DateRangeContainer>
  );
};

export default DateRange;
