import { AsyncPaginate } from "react-select-async-paginate";

import loadOptions from "./AsyncOptions";
import { SearchListContainer } from "./Style";
import { SearchListProps } from "./SearchListTypes";

const SearchList = ({ onChange, label, value }: SearchListProps) => {
  return (
    <SearchListContainer>
      <AsyncPaginate
        loadOptions={loadOptions}
        value={value}
        getOptionValue={(option: any) => option.variable}
        getOptionLabel={(option: any) => option.display_name}
        onChange={onChange}
        additional={{
          page: 0,
        }}
        isSearchable={true}
        placeholder={label}
        debounceTimeout={500}
      />
    </SearchListContainer>
  );
};

export default SearchList;
