import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/",
  headers: {
    Authorization:
      "01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788",
  },
});

export default axiosInstance;
