import axios from "axios"

const API = axios.create({
    baseURL: "https://projeto-individual-mod3.onrender.com/",
  });

export default API