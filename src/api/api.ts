import {FormType} from "../ui/Form";
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    mode: 'no-cors',
  }
})

export const api = {
  send(form: FormType) {
    return instance.post('', form)
  }
};