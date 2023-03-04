import { useEffect, useState } from "react";
import axiosInstance from "../Axios/Axios";

export const useFetchSeriesCatalog = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosInstance.get("/", {
          headers: {
            Authorization:
              "01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788",
          },
        });
        setSeries(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return [series];
};
