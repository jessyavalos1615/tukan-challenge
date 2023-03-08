import React from "react";
import { DateRangePicker } from "rsuite";

import { DateRangeProps } from "./DateRangeTypes";
import { DateRangeContainer } from "./Style";

const DateRange = ({ value, onChange }: DateRangeProps) => {
  return (
    <DateRangeContainer>
      <DateRangePicker value={value} placeholder="Choose range date" onChange={onChange} />
    </DateRangeContainer>
  );
};

export default DateRange;
