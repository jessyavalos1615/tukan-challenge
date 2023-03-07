import axiosInstance from "../../Axios/Axios";

const loadOptions = async (
  searchQuery: any = "",
  loadedOptions: any,
  { page }: any
) => {
  const {
    data: { data, totalPages },
  } = await axiosInstance.get(`/?q=${searchQuery}&page=${page}&pageSize=5`, {
    headers: {
      Authorization:
        "01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788",
    },
  });

  return {
    options: data || [],
    hasMore: totalPages > page,
    additional: {
      page: searchQuery ? 0 : page + 1,
    },
  };
};

export default loadOptions;
