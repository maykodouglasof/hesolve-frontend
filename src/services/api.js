import axios from "axios";

const api = axios.create({
  baseURL: "https://hesolve-app-r8ytz.ondigitalocean.app/",
  //baseURL: 'http://192.168.0.106:3000',
});

export { api };
