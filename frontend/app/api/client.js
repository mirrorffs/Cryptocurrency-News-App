import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.29.126:3000/api',
});
