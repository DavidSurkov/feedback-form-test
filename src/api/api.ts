import { FormType } from '../ui/Form';
import axios from 'axios';

export const api = {
  send(form: FormType) {
    return axios.post('https://form-data-base.herokuapp.com/form', form, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  },
};
