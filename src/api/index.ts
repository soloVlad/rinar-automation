import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_RAPID_API_URL,
  timeout: 1000,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
  }
})

export default api; 