import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series",
});

export default axiosInstance;

// "Bmx-Token": "edcaacac167fc5a766869b4778ce85e408eecf6908517692d8846bbce025a00c",
