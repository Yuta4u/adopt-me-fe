import axios from "axios"

export default axios.create({
  // baseURL: "https://dummyjson.com/",
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
})
