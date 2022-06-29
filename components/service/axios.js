import Axios from 'axios';


const api = Axios.create({
  baseURL: 'https://gorest.co.in/public/v2/users/1901020043/post',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    accept: 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    let token = null;
    try {
      token = '508685b5bd4519dc33e90c040dc0715efcf04778f9b61eb49ec3b02789442960';
    } catch (err) {
      if (err instanceof ReferenceError) {
        // use React Native AsyncStorage
        token = '508685b5bd4519dc33e90c040dc0715efcf04778f9b61eb49ec3b02789442960';
      } else {
        throw err;
      }
    }

    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;