import axios from 'axios';

const Api = axios.create({
  baseURL: `http://localhost:3001/api`,
  responseType: "json"
});

export default Api;
