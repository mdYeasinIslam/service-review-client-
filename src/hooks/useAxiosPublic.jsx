import axios from 'axios'
const axiosPublic = axios.create({
    baseURL:'https://service-review-server-pink.vercel.app'
})
export const useAxiosPublic = () => {
  return axiosPublic
}
