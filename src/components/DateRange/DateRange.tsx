import React from "react";
import { DateRangePicker } from "rsuite";

import { DateRangeProps } from "./DateRangeTypes";
import { DateRangeContainer } from "./Style";

const DateRange = ({ value, onChange }: DateRangeProps) => {
  return (
    <DateRangeContainer>
      <DateRangePicker showOneCalendar value={value} placement='bottomEnd' placeholder="Choose range date" onChange={onChange} />
    </DateRangeContainer>
  );
};

export default DateRange;
