import axios from "axios";
import useEnv from "~~/composables/env"

export type Response<T> = {
  message: string,
  data: T | null
}

export const api = () => axios.create({
  baseURL: `${useEnv().severApi}`,
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});