import Axios from "axios";

let instance = Axios.create({
  baseURL: process.env.API_URI,
});

// request header
instance.interceptors.request.use(
  (config) => {
    config.headers = { Authorization: process.env.AUTHORIZATION };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const createAll = (data) => {
  Axios.post(process.env.API_URI + "/assistants/all", data).then((resp) => {
    console.log("Asistentes añadidos !");
  });
};
