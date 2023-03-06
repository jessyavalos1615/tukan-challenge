import Select from "react-select";
import React, { useMemo } from "react";

import { seriesCatalog } from "../../utils/filterSeries";
import { SearchListProps, SelectOptions } from "./SearchListTypes";
import { SearchListContainer } from "./Style";

const SearchList = ({ data, onChange, label, value }: SearchListProps) => {
  const options: SelectOptions[] = useMemo(
    () => data.map(seriesCatalog),
    [data]
  );

  return (
    <SearchListContainer>
      <Select
        options={options}
        onChange={onChange}
        placeholder={label}
        value={value}
      />
    </SearchListContainer>
  );
};

export default SearchList;
