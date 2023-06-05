import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Accept: 'application/json',
  },
})

export default customFetch
