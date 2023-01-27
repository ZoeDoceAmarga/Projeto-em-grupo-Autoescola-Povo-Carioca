import axios from "axios"

const API = axios.create({
    baseURL: "https://autoescola-api.onrender.com/",
  });

export default API