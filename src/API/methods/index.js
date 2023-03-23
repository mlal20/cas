import clients from "../clients";
const { api } = clients;
export default {
  post: (url, body) => {
    return api.post(url, body);
  },
  get: (url) => {
    return api.get(url);
  },
  put: (url, body) => {
    return api.put(url, body);
  },
  delete: (url) => {
    return api.delete(url);
  },
  patch: (url, body) => {
    return api.patch(url, body);
  },
};
