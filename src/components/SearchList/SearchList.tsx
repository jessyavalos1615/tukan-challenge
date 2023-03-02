import Select from "react-select";
import React, { useMemo } from "react";

import { seriesCatalog } from "../../utils/filterSeries";
import { SearchListProps, SelectOptions } from "./SearchListTypes";

const SearchList = ({ data, onChange, label, value }: SearchListProps) => {
  const options: SelectOptions[] = useMemo(
    () => data.map(seriesCatalog),
    [data]
  );

  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={label}
      value={value}
    />
  );
};

export default SearchList;
