import axios from "axios"

const API = axios.create({
    baseURL: "https://testeprojeto.onrender.com/",
  });

export default API