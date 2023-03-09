import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series",
});

export default axiosInstance;
