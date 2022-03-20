import axios from 'axios'

const baseURL = 'https://healxmxinfo.herokuapp.com/'

export const api = axios.create({
  baseURL,
})
