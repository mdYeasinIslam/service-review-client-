import axios from 'axios'
const axiosPublic = axios.create({
  baseURL: "https://adventa-server.vercel.app",
  // baseURL: "http://localhost:3000",
});
export const useAxiosPublic = () => {
  return axiosPublic
}
