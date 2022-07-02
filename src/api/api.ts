import {FormType} from "../ui/Form";
import axios from "axios";

export const api = {
  send(form: FormType) {
    return axios.post('http://localhost:9000', form, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
  }
};