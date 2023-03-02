import { useEffect, useState } from "react";
import axiosInstance from "../Axios/Axios";

export const useFetchSeriesCatalog = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosInstance.get("");
        setSeries(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return [series];
};
