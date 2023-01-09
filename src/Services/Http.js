import axios from "axios";

let serverAxios = axios.create({ baseURL: "https://api.mediniom.com/api/v2" });

export function get(url, config = {}) {
  return serverAxios.get(url, config);
}
export function post(url, payload, config) {
  return serverAxios.post(url, payload, config);
}
