import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_URL_APP,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api