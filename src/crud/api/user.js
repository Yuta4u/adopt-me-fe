//axios
import axios from "axios"

export const getAllUser = async () => {
  const { data } = await axios.get("http://localhost:8000/user/v1/allUser")
  console.log(data)
  return data
}

export const helloWorld = () => {
  return "halo there"
}
