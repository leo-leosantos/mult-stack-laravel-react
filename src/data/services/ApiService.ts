import axios from 'axios';


export const ApiService = axios.create({
  baseURL: 'http://localhost/multistack/adote-um-pet/public/api',
  headers: {
        'Content-Type': 'application/json',
  }
});


