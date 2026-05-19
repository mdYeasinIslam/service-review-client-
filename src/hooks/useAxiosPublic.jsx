import axios from 'axios'
const axiosPublic = axios.create({
  baseURL:'https://service-review-server-pink.vercel.app'
  // baseURL: "http://localhost:3000",
});
export const useAxiosPublic = () => {
  return axiosPublic
}
