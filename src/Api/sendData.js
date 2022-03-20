import { api } from './config'

export const sendData = async (info) => {
  try {
    const { data } = await api.post(`customers`, info)
    return data
  } catch (e) {
    return e
  }
}
