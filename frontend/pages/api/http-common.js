import axios from "axios"

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
})

export const BASE_URL = "http://localhost:8080"
